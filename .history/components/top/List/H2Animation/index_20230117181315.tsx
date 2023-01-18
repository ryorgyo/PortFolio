"use client";
import "styles/css/globals.css";
import React, { FC, useEffect, useRef, useState } from "react";

export const H2Animation: React.FC<{
  hover: boolean;
}> = ({ hover }) => {
  const ref = useRef<HTMLDivElement>(null);
  const elm = ref.current;

  useEffect(() => {
    if (hover == false) {
      //カーソルはずれた際の挙動
      //canvasタグの削除
      if (elm?.firstChild != null) {
        elm.firstChild.remove();
      }
      return;
    }
    const Canvas: HTMLCanvasElement = document.createElement("canvas");
    elm?.appendChild(Canvas);
    const context: CanvasRenderingContext2D | null = Canvas.getContext("2d");
    const unit: number = 100;
    const color: string = "#00ffd1";
    type infoType = {
      seconds: number;
      t: number;
    };
    const info: infoType = {
      seconds: 0,
      t: 0,
    };
    let waterLevelRise: number = 0;

    const init = () => {
      Canvas.width = Canvas.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
      Canvas.height = 70; //波の高さ
      update();
    };

    const update = () => {
      if (waterLevelRise <= 50) {
        // 各キャンバスの描画
        draw(Canvas, color);

        // 共通の描画情報の更新
        info.seconds = info.seconds + 0.014;
        info.t = info.seconds * Math.PI; //Math.PIはπの事、3.14が代入される
        // 自身の再起呼び出し
        setTimeout(update, 2);
      } else {
        //アニメーションを停止、パスを指定して塗りつぶす記述
        if (context) {
          context.fillStyle = color; //塗りの色
          context.fillRect(0, 0, Canvas.width, Canvas.height);
          return;
        }
      }
    };

    const draw = (Canvas: HTMLCanvasElement, color: string) => {
      // 対象のcanvasのコンテキストを取得
      // キャンバスの描画をクリア
      if (context) {
        context.clearRect(0, 0, Canvas.width, Canvas.height);
      }

      //波を描画 drawWave(Canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
      drawWave(Canvas, color, 1, 3, 0); //drawWave(canvas, color[0],0.5, 3, 0);とすると透過50%の波が出来る
    };
    const drawWave = (
      canvas: HTMLCanvasElement,
      color: string,
      alpha: number,
      zoom: number,
      delay: number
    ) => {
      if (context) {
        context.fillStyle = color; //塗りの色
        context.globalAlpha = alpha;
        context.beginPath(); //パスの開始
        drawSine(canvas, info.t / 1, zoom, delay);
        context.lineTo(canvas.width, canvas.height); //パスをCanvasの右下へ
        context.lineTo(0, canvas.height); //パスをCanvasの左下へ
        context.closePath(); //パスを閉じる
        context.fill(); //波を塗りつぶす
      }
    };
    const drawSine = (
      canvas: HTMLCanvasElement,
      t: number,
      zoom: number,
      delay: number
    ) => {
      var xAxis = Math.floor(canvas.height / 2); //括弧内の数値以下の最大の整数を返す（小数点以下を切り捨てる）
      var yAxis = 0;
      // Set the initial x and y, starting at 0,0 and translating to the origin on
      // the canvas.
      var x = t; //時間を横の位置とする
      var y = Math.sin(x) / zoom; //Math.sin()は括弧内の数値のサイン（正弦）を返す
      if (context) {
        //unitは100で設定
        context.moveTo(yAxis, unit * y + xAxis); //スタート位置にパスを置く
        // Loop to draw segments (横幅の分、波を描画)
        for (let i = yAxis; i <= canvas.width + 10; i += 10) {
          x = t + (-yAxis + i) / unit / zoom;
          y = Math.sin(x - delay) / 8;
          context.lineTo(i, unit * y + xAxis - waterLevelRise);
          waterLevelRise += 0.005;
        }
      }
    };
    init();
  }, [hover]);

  return <div ref={ref}></div>;
};
