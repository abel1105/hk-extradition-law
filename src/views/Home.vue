<template>
  <div class="home">
    <div id="cut-0" class="cut cover" v-bind:style="cutStyle">
      <h1 class="title" v-bind:style="titleStyle">
        <span class="space">反對逃犯條例修訂草案事件簿</span>
      </h1>
    </div>
    <div class="content-wrap" v-bind:style="{ height: height * 33 + 'px' }">
      <Map
        v-if="isLoaded"
        v-bind:width="width"
        v-bind:height="height"
        v-bind:map="HKMap"
        v-bind:road="HKRoad"
        v-bind:march="HKMarch"
      />
      <div class="map-content-wrap">
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>發生地</h3>
            <h1 class="box-title">香港</h1>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/09 103萬人</h3>
            <h2 class="box-title">香港反送中大遊行</h2>
          </div>
        </div>
        <div class="cut cut-bottom" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/09 14:20</h3>
            <h1 class="box-title">由維園草坪起步，遊行至金鐘立法會</h1>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="image">
            <img
              class="image"
              alt="2019年6月反對逃犯條例修訂草案遊行，攝於金鐘軍器廠街口，望軒尼詩道。"
              src="../assets/img/0609/01.jpg"
            />
            <span
              ><a
                href="https://zh.wikipedia.org/wiki/2019%E5%B9%B46%E6%9C%889%E6%97%A5%E5%8F%8D%E5%B0%8D%E9%80%83%E7%8A%AF%E6%A2%9D%E4%BE%8B%E4%BF%AE%E8%A8%82%E8%8D%89%E6%A1%88%E9%81%8A%E8%A1%8C#/media/File:June9protestTreefong03.jpg"
                target="_blank"
                >Hf9631</a
              ></span
            >
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/09 15:55</h3>
            <h2 class="box-title">抵達終點、金鐘立法會外的示威區</h2>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/09 17:00</h3>
            <h2 class="box-title">
              因參與者數目太多，遊行隊伍龍尾一度延長至北角電廠街一帶
            </h2>
          </div>
        </div>
        <div class="cut cut-start" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/09 19:00</h3>
            <div class="image">
              <img
                class="image"
                alt="晚上7時，民陣在立法會道舉行集會"
                src="../assets/img/0609/02.jpg"
              />
              <span
                ><a
                  href="https://zh.wikipedia.org/wiki/2019%E5%B9%B46%E6%9C%889%E6%97%A5%E5%8F%8D%E5%B0%8D%E9%80%83%E7%8A%AF%E6%A2%9D%E4%BE%8B%E4%BF%AE%E8%A8%82%E8%8D%89%E6%A1%88%E9%81%8A%E8%A1%8C#/media/File:Demonstration_in_Legislative_Council_Road_20190609.jpg"
                  target="_blank"
                  >Wpcpey</a
                ></span
              >
            </div>
            <h3 class="box-title">民陣在立法會道舉行集會</h3>
          </div>
        </div>
        <div class="cut cut-start" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/09 21:00</h3>
            <div class="image">
              <img
                class="image"
                alt="晚上9時，警方出動多輛運員車等警車戒備"
                src="../assets/img/0609/03.jpg"
              />
              <span
                ><a
                  href="https://zh.wikipedia.org/wiki/2019%E5%B9%B46%E6%9C%889%E6%97%A5%E5%8F%8D%E5%B0%8D%E9%80%83%E7%8A%AF%E6%A2%9D%E4%BE%8B%E4%BF%AE%E8%A8%82%E8%8D%89%E6%A1%88%E9%81%8A%E8%A1%8C#/media/File:June9protestTreefong06.jpg"
                  target="_blank"
                  >Hf9631</a
                ></span
              >
            </div>
            <h3 class="box-title">金鐘站外警方出動多輛運員車等警車戒備</h3>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/09 22:00</h3>
            <h2 class="box-title">民陣宣布集會遊行結束</h2>
          </div>
        </div>

        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/12 12萬人</h3>
            <h1 class="box-title">群眾佔領行動</h1>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/12 07:55</h3>
            <h2 class="box-title">示威者衝出夏慤道與龍和道，展開佔領行動</h2>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/12 12:00</h3>
            <div class="image">
              <img
                class="image"
                alt="中午時佔領情況"
                src="../assets/img/0612/01.png"
              />
              <span
                ><a
                  href="https://zh.wikipedia.org/wiki/%E5%8F%8D%E5%B0%8D%E9%80%83%E7%8A%AF%E6%A2%9D%E4%BE%8B%E4%BF%AE%E8%A8%82%E8%8D%89%E6%A1%88%E4%BD%94%E9%A0%98%E8%A1%8C%E5%8B%95#/media/File:Demonstration_against_extradition_bill_aerial_view_20190612.png"
                  target="_blank"
                  >立場新聞</a
                ></span
              >
            </div>
            <h3 class="box-title">中午時佔領情況</h3>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/12 16:00</h3>
            <div class="image">
              <img
                class="image"
                alt="警察在添美道附近發放催淚彈"
                src="../assets/img/0612/02.jpg"
              />
              <span
                ><a
                  href="https://zh.wikipedia.org/wiki/%E5%8F%8D%E5%B0%8D%E9%80%83%E7%8A%AF%E6%A2%9D%E4%BE%8B%E4%BF%AE%E8%A8%82%E8%8D%89%E6%A1%88%E4%BD%94%E9%A0%98%E8%A1%8C%E5%8B%95#/media/File:Demonstration_against_extradition_bill,_12_June_2019.jpg"
                  target="_blank"
                  >VOA</a
                ></span
              >
            </div>
            <h3 class="box-title">警察在添美道附近發放催淚彈</h3>
          </div>
        </div>
        <div class="cut cut-start" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/12 20:00</h3>
            <div class="image">
              <img
                class="image"
                alt="警方將示威者驅趕至中環干諾道中近大會堂對出"
                src="../assets/img/0612/03.jpg"
              />
              <span
                ><a
                  href="https://news.mingpao.com/pns/%E8%A6%81%E8%81%9E/article/20190613/s00001/1560365252043/%E9%AB%98%E5%B3%B04%E8%90%AC%E4%BA%BA-%E5%85%A5%E5%A4%9C%E6%95%B8%E7%99%BE%E4%BA%BA%E9%80%80%E5%AE%88%E4%B8%AD%E7%92%B0-%E8%AD%A6%E7%9B%AE%E6%A8%99%E4%BF%9D%E7%AB%8B%E6%9C%83-%E6%9A%AB%E4%B8%8D%E6%B8%85%E5%A0%B4"
                  target="_blank"
                  >明報新聞網</a
                ></span
              >
            </div>
            <h3 class="box-title">不斷施放催淚彈之後，示威者陸續退到中環</h3>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/13 01:00</h3>
            <h2 class="box-title">凌晨1時，大部份示威者已經散去</h2>
          </div>
        </div>

        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/16 14:43 200萬+1人</h3>
            <h1 class="box-title">反送中大遊行</h1>
          </div>
        </div>
        <div id="cut-head" class="cut" v-bind:style="cutStyle">
          <svg
            class="head"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360.72 388.26"
            v-bind:style="headStyle"
          >
            <path
              d="M1,329c4-1.47,8.39-1.62,10.65-6.17,2.34.78,4.07-.66,6.07-1.73,3.64-1.94,7.54-3.4,11.27-5.19,8.15-3.89,16.2-8,24.44-11.73,4.53-2.05,9.56-3.05,14-5.26,5.37-2.69,11.1-3.37,16.83-4.31a12.22,12.22,0,0,0,6.61-3.16,53.05,53.05,0,0,1,5.93-4.63,36.49,36.49,0,0,0,12.32-14.24c2.24-4.55,5.23-8.66,9.78-11.2a49.69,49.69,0,0,1,7.59-3.19c3.11-1.11,4-3.07,2.37-6-.7-1.25-1.71-2.32-2.52-3.5-6.8-9.89-11.94-20.51-14-32.43-.74-4.35-1.09-8.77-1.42-13.18q-.86-11.46-1.45-22.94c-.27-5.33.46-10.51,3.18-15.25a2,2,0,0,0-.58-2.83,9.49,9.49,0,0,1-1.43-2c1.68-1.27,2.38,0,3,.85,1.25,1.54,2.5,3,4.86,2.32l.44,2.18-2.34.74a9.26,9.26,0,0,0,2.5,1.5c2.9.64,3.53,2.68,4,5.22a32.28,32.28,0,0,0,2.19,6.45,6.74,6.74,0,0,0,2,2.93c3.59,2.46,6.77,5.46,11.5,6.11,5.93.81,11.82,1.86,18.52,1.89l-3-1.52c13.4-2.51,16.47-2,23.44-16.87,1.86,2.77-1.64,4.6-.89,7.54,1.3-2.38,2.33-4.36,3.46-6.29,2-3.37,5.77-3.32,7.6.18a34.69,34.69,0,0,1,2,5.38c.53,1.62,1.13,2.94,3.25,2.33,1.23-.35,2,.41,2.67,1.34,3.31,4.3,7.49,7.1,13.07,7.6,7.19.65,14.34,1,21.46-.8,6.18-1.56,11.6-4,13.94-10.75.92,1.09,1.68,1.71,1.08,3.27a16.3,16.3,0,0,0-.55,5.21,56.22,56.22,0,0,0,.07,7.79c.32,2.78-.54,5.58.47,8.37.33.93-.32,2.33-.78,3.41a16.31,16.31,0,0,0-.93,8c.35,4.16.86,8.27-.21,12.68s-2.92,8.22-3.85,12.48a4.88,4.88,0,0,1-1.09,1.81c-1.18,1.49-2.71,2.79-3.57,4.43a21.46,21.46,0,0,1-7.6,7.77,4.6,4.6,0,0,0-2.21,3.63c-5.76,1.11-10.2,4.24-13.85,8.67a10.62,10.62,0,0,1-2.61,2.25c-3.46,2.07-7.16,3.74-10.1,6.68-1,1-2.74,1.36-4.21,1.78-1.7.49-3.48.73-5.31,1.1,0,1.71,1.19,1.87,2.2,1.74,2.94-.37,4.06,1.49,4.93,3.74.3.78.47,1.62.82,2.38.83,1.81,1.64,3.65,2.63,5.38,1.91,3.33,2.63,4.62.12,7.41a3.44,3.44,0,0,0,.55,4.75,4.16,4.16,0,0,1,1.63,4.05,21.59,21.59,0,0,0,.3,2.47c0,1.82.74,3,2.73,3.06a7,7,0,0,1,1.65.57c-.54,2.73-1.16,5.37-1.55,8.05a17.18,17.18,0,0,0,.23,3.77,9.91,9.91,0,0,1,.3,2.43c-.69,4.12,2.27,6.58,4.28,9.44.29.41,1.62.49,2.21.21,1.38-.66,2.74-1.48,2.85-3.35a14.9,14.9,0,0,1,.63-4.13c.45-1.21,1.57-1.52,2.53-.37a21.85,21.85,0,0,1,2.52,3.48c1.41,2.55,3,4.34,6.29,3.07.35-.13.88.2,1.69.42-2,2.87-1.55,5.35,1,7.75.42-.58,1-1.06,1-1.44-.17-1-.83-2-.92-3a5.2,5.2,0,0,1,.59-2.72,15.14,15.14,0,0,1,2-2.47c-4.13-3-2.93-5.55.28-8.45-1-1.43-2.56-2.75-2.69-4.2s1.32-2.78,2.11-4.25c-3.85-3.76-3.92-4.17-1-8.32-2.54-2-4.58-4.28-3-7.16-1.17-2.34-2.05-4.2-3-6-.53-1-1.21-1.92-1.83-2.87a12.69,12.69,0,0,1-1.54-2.33c-1.27-3.52-3.28-6.8-2-10.95.49-1.54-.6-3.59-1.15-6.29a30.43,30.43,0,0,1,8.35,5.48c5.85,5.67,11.48,11.56,17.18,17.39,1.17,1.19,2.15,2.58,3.36,3.74,2.61,2.51,5.45,4.62,9.14,5.43a89.23,89.23,0,0,1,23.07,8.91c4.39,2.36,9.12,4.09,13.62,6.32,1.82.91,3.91,1.57,5.8,2.54a11.11,11.11,0,0,0,2,.47c.75.21,1.78.27,2.16.79,2.61,3.6,6.76,4.79,10.37,6.82,1.78,1,3.59,1.92,5.44,2.78a20.51,20.51,0,0,0,4,1.48,20.47,20.47,0,0,1,11,7c2.26,2.58,4.35,5.29,6.61,7.87,1.4,1.61,1.43,2.51-.27,4.5,1.9,4,5.28,15.91,3.62,20.61a30.28,30.28,0,0,1,3.43,2.74A2.4,2.4,0,0,1,347,382c.55,2.38,1,4.31,1.44,6.24H268.56c-.56-2.92-1-5.88-1.72-8.76-2.21-8.65-6.38-16.48-10.28-24.44-3.32-6.76-6.47-13.62-9.47-20.53-3.14-7.22-6-14.56-9-21.84a20.11,20.11,0,0,1-1.38,3.73,24.6,24.6,0,0,1-2.92,3.29c1.81-.09,3.51-.49,4.15,1.45a3.32,3.32,0,0,1-1.43,4.33c-1.36.87-1.23,1.73.23,2.67,2.5,1.61,2.63,3,.84,5.16l-.79,1c1,1.57,2.46,2.82,2.51,4.13s-1.15,2.93-1.85,4.48c2.34,3.84,2.33,4.16.15,7.17,0,2.27.41,4-.11,5.46s-2,2.38-2.75,3.26c0,2,.54,4.07-.15,5.59s-2.64,2.47-4.22,3.84c-.25,4.67-1,5.6-5,6.27-1.2,1.82-1.9,3.93-3.33,4.74s-3.71.47-6,.66c-3.19,4.17-3.91,4.24-9.88.22a6.29,6.29,0,0,1-6.19,2.38c-3.09-.38-2.92-3.42-4.36-5.08-6.32,3.11-8.86,2-10.28-4.53-6.66,1.23-10,.56-9.75-6.87a7.67,7.67,0,0,1-6.75-1c-2.73-1.7-1.41-4.48-1.59-6.63-2.28-.49-4.49-.6-6.35-1.46-2.46-1.14-1.4-4.05-2.15-6.14L154,349.36c-.23.62-.4,1-.52,1.45s-.16.81-.25,1.3l-11.47-.8a10.81,10.81,0,0,0,.12,2.12c1.3,4.48,2.68,8.93,4,13.42,2,7.13,4,14.27,6,21.41H0m228.91-31c-.31-2.86-1.92-3-3.92-3-15-.28-29.92-.69-44.88-1-3.55-.08-7.11,0-10.71,0l-.89,3.6c6.35-1.26,9.45,1.31,8.2,8,5.92-2.58,9.26-.44,9.42,6.35,2.05-1.38,4-2.76,6.62-1.48,2.39,1.18,3,3.38,3.28,5.24,1.84-.74,3.58-2.05,5.22-1.94,1.81.11,3.53,1.52,5.5,2.47,1.73-2.45,4.44-2.59,7.51-1.45,1.09-2.84,3.29-3.84,6-3.92.35-3.16,2.34-4.73,5.18-5.71C224.75,361.08,225.79,358.62,228.91,357.24ZM167.33,233a34,34,0,0,1,5.55-.25c4.88.61,9.61,2.76,14.69,1.46a1.88,1.88,0,0,1,.71,0,7.86,7.86,0,0,0,4.47-.38c2.43-1,5.7.62,6.71,2.83-2.85.43-5.69.92-8.56,1.29-4.94.64-9.88,1.26-14.87.41a14.24,14.24,0,0,0-3.11.16c2.35,1.07,4.67,2,7,2,4.18,0,8.34-.7,12.52-1,2.66-.21,5.37-.58,8.59,1.08l-10.2,6c6.82.8,16.76-2.06,18.23-8.82l-1.72-1.1c1.8-2,3.88-3.48,7-2.86-.36-1.65-.66-3-1-4.52a9.53,9.53,0,0,0-3,.05,8.29,8.29,0,0,1-5.28-.2c-3-.83-5.94-1.77-9-2.4-2.3-.48-4.69-1-7.15,0-.26,1.68-.51,3.29-.82,5.26-4.38-.74-8.5,1.57-13.37,0l2.45-1.77c-.74-.65-1.68-1.07-1.84-1.69-.44-1.7-1.55-1.57-2.79-1.38a90.15,90.15,0,0,0-9.16,1.51c-3.59.94-6.92,0-10.27-.8-2.55-.59-3.32-2.15-2.51-4.62.44-1.35,1.47-2.52,1.85-3.88.56-2,2.48-3.87,1-6.67-4.85,2.49-7.21,7.71-11.95,10-1.07.51-1.76,1.79-2.89,3a21,21,0,0,0,3.35,2.59,4.58,4.58,0,0,1,2.63,2.7c.87,2.34,1.4,2.54,3.66,1.46a5.35,5.35,0,0,1,5.94.34c3,2,6.19,3.6,9.32,5.35.15.08.42-.08.69-.13l-2.05-2.29,4.3.52C166.86,235,167.07,234.09,167.33,233Zm-33.42,77.09c-.68-2-1.21-3.8-1.9-5.54-1-2.45-2-4.85-3.08-7.27a9.26,9.26,0,0,1,.22-8,13.66,13.66,0,0,0,1.19-6.62c-.05-2.4-.07-4.8,0-7.19a5,5,0,0,1,.51-2.74c1.07-1.3.56-2.47.22-3.71-.54-1.92-1.12-3.82-1.67-5.73-.43-1.5-1.3-1.95-2.67-1.25-1.07.54-2,1.23-3.07,1.87-3,1.87-4.56,4.44-4.28,8.09.16,2.12,0,4.26,0,6.44l2.52,1.57c-2.87.27-2.68,2-2.11,3.2,1.58,3.34,2.35,6.9,3.44,10.37.2.64,1.1,1.13,1.77,1.51a2.61,2.61,0,0,1,1.55,3.16l-1.83.54c.27,1.19.46,2.25.77,3.27a8.92,8.92,0,0,0,.83,1.55c3.56-1.34,4.68-.46,4.44,3.33l-2.73.15c.41.94,1.15,2.05.95,2.25-1.62,1.67-.5,3.08.19,4.63l.79-3.06Zm29-99.06c3.16,1.66,5.86,2.66,9,1.77,1.51-.42,3.18-.54,4.35.83a12,12,0,0,0,7,3.77c2.72.59,5.27.43,6.78-1.77,1.93-2.83,4.33-3.27,7.36-3a9.63,9.63,0,0,0,3.82-.69c.61-.2,1-1,1.52-1.52-1.74-.76-3.15-1.33-4.53-2a4.58,4.58,0,0,0-4.77.22c-1.89,1.25-3.83,2.44-5.67,3.77-3.32,2.39-5.69,2.22-8.8-.63a36.07,36.07,0,0,0-3.41-2.6c-2.86-2-5.8-1.83-8.77-.23C165.68,209.59,164.52,210.18,162.91,211Zm-33.15,105.6c1.65,9.46,6.48,18.05,10,27.16.17-1.89-1.61-3.57-.21-5.44,1.37-1.6,4.22,2.12,5.2-1.38-5.53-1.75-6.43-3.08-6-8.76-2.86-2.33-6.29-4.32-5.38-7.94Zm5.61,1.81,3.5-.21c-.41-2.11-.62-3.84-2.46-5.06C136.07,314.91,135.78,316.39,135.37,318.44Z"
            />
            <path
              d="M154.24,150.22l8.25,5.46c-3.54-.4-6.44-.76-9.34-1.06A68.53,68.53,0,0,0,122,158.39c-1.69.63-3.5,1.12-3.52,3.42-2.6.36-3.94-1-4.94-2.88a28.91,28.91,0,0,1,6.83-10.86c2.28-2.37,3-5.44,3.54-8.46a6.55,6.55,0,0,1,3.45-4.67,41.06,41.06,0,0,0,3.61-2.32c1.64-1.23,3.22-2.28,5.47-2.33a8.66,8.66,0,0,0,4.31-1.63,46.48,46.48,0,0,0,7.57-5.91,30.35,30.35,0,0,1,9.55-6.84c.36-.17.86,0,1.29,0s1.43,0,1.47-.11c.58-2.34,3.22-2.22,4.42-3.78a.53.53,0,0,1,.29-.21c3.31-.29,6.24-2.11,9.37-2.61a49.84,49.84,0,0,0,8.81-2c1.75-.61,2.63-.29,3,1.53l6.07-3.19c1.53,2.33,4.38-1.26,5.95,1.6,1-1.68,2.41-1.47,4.05-1.53a15.75,15.75,0,0,1,9.11,2c.91.54,2.61.24,3.76-.19,2.58-1,4.64.29,6.83,1.18.21.08.49.26.54.45,1.09,3.9,5.48,5.32,6.79,9.09.58,1.67,1.77,3.14,1,5.1a2.06,2.06,0,0,0,.1,1.72c1.26,1.76,2,3.45.48,5.46a1.48,1.48,0,0,0,.09,1.38c1.58,2.19.59,4.6.69,6.91,0,.45.07,1.1-.19,1.34-2.78,2.51-1.35,4.86.17,7.24.1.16,0,.44,0,.93a21.58,21.58,0,0,1-2.71-.46,21.8,21.8,0,0,0-14,.12,3.91,3.91,0,0,1-1.37.38c-4.15-.18-7.55,1.66-11.13,3.46-1.91.95-3.85,1.58-5.34,3.45a5.4,5.4,0,0,0,5.88,1.58c3.45-1.25,6.8-2.81,10.28-4.27l-.65-2.16c4.81-3.38,9.89-1.75,14.65-.36a9.77,9.77,0,0,1,6.95,6.61c-5.09-.12-10.2-.29-15.31-.34a77,77,0,0,0-24.74,3.86,29.08,29.08,0,0,1-6.24,1.66,24.43,24.43,0,0,1-8.15-.29,90.07,90.07,0,0,1-13.53-4.75c-2.71-1.2-5.06-3.25-7.49-5C157.12,150.24,157.17,150.16,154.24,150.22Z"
            />
            <path
              d="M147.36,156.16a57.73,57.73,0,0,1,24.33,5.51c3.85,1.77,4.37,2.7,3.74,7a30.53,30.53,0,0,1-4,11.42,10.16,10.16,0,0,1-6,4.75,48.45,48.45,0,0,1-32.71-1.1c-3.92-1.55-6.6-3.93-6.9-8.24-.27-3.92-.3-7.86-.24-11.79,0-2.43,1.45-3.9,3.88-4.46,3.37-.79,6.68-1.85,10.08-2.48A73.26,73.26,0,0,1,147.36,156.16Zm23.75,14.33c-1.2-1.51-2-3.21-3.24-3.91a79.94,79.94,0,0,0-8.89-3.75c-.63-.25-1.85-.49-1.95-.29-1,2-2.74,1-4.13.94a24.35,24.35,0,0,0-11.19,2.08c-4.75,2.23-9.44,4.54-15,4.27,3.31,1,6.49,2.27,10,1.57,2.33-.46,4.68-.9,7-1.25,1-.15,2.5-.48,3.09,0,2.24,2,5.74.08,7.65,2.71,1.64-1,2.57.52,3.82,1a5.41,5.41,0,0,0,2.74.17c1.69-.31,3.35-.84,5.18-1.33l-.31-2.38c1.77,1,1.84,3.82,4.28,2.95.4,1.34.71,2.4,1.17,3.93a25.82,25.82,0,0,1,1.23-3.67c.51-1,1.86-1.57,1.23-3.23Z"
            />
            <path
              d="M242.91,172q1,10.26-7.66,13.49a45,45,0,0,1-32.29.32c-.56-.21-1.11-.44-1.66-.68-3.74-1.68-4.78-3.58-4-7.52.23-1.15.77-2.24,1.08-3.38a12.05,12.05,0,0,1,1.22-3.49L200,173c2.44-.74,5.29-.3,6.62-3.51a19.74,19.74,0,0,1,2.17,1.27c4.34,3.31,7.22,3.06,10.93-1.19,1,.74,1.49,2.65,3.37,1.86.23-.09,1.28.89,1.34,1.43.2,2.12,1.59,3.09,3.49,4,3.7-3.17,6.24,2.29,10.21,1.32.36-.84.85-2,1.44-3.41l2.09,1.32C242.05,174.77,242.43,173.54,242.91,172Z"
            />
            <path
              d="M109.24,209.74c0,1.75.1,3,0,4.34-.22,2.24-1.9,3.5-4,2.76-1.58-.55-3.56-1-3.77-3.27a2.1,2.1,0,0,0-.67-1.21c-2.78-2.58-2.65-5.87-2.54-9.29a67.78,67.78,0,0,0-.63-7.06c-.12-1.54-1-3.29,1.19-4.69v5.06l2.36-3.63c2.22,1.78,5.68,1.39,6.87,4.77-2.53,1.22-3.83-1.56-6.52-1.37a17.85,17.85,0,0,0,1.65,1.72,26.68,26.68,0,0,1,3.38,2.51c.54.58,1,2.1.66,2.51-1.7,2-.12,4.09-.7,6.25Z"
            />
            <path
              d="M193.92,169.77c0-.53-.08-1.23-.16-1.92-.3-2.64.85-4.22,3.3-5.25a54.56,54.56,0,0,1,24.26-4c3.1.16,6.18.63,9.59,1-.06,1.09-.1,1.92-.15,3a6.11,6.11,0,0,1-1.7-.34c-2.74-1.68-5.41-1-8.15,0a5.85,5.85,0,0,1-3,.24,25.21,25.21,0,0,0-12.36,1.29,13.34,13.34,0,0,0-2.21,1.16c-2.17,1.2-4.33,2.43-6.52,3.6C195.88,169,194.92,169.33,193.92,169.77Z"
            />
            <path
              d="M251.93,215.7c-3.32-1-3.38-1.1-3.06-3.69.25-2,.34-3.95.52-5.93.17-1.74,2.64-2.81,4.31-1.88,2.3,1.29,3.19,3.29,2,5.73A47.55,47.55,0,0,1,251.93,215.7Z"
            />
            <path
              d="M221.17,165.82l-13.11-1.43C212.72,163.3,217.34,162.39,221.17,165.82Z"
            />
            <path d="M124.13,270.1c1.19,2.14.8,3.6-2.07,8l-1.63-4Z" />
          </svg>
          <div class="box">
            <h1>五大訴求</h1>
            <h4 class="box-title">
              撤回修訂逃犯條例、不檢控示威者、追究警方開槍責任、不將示威行動定性為暴動、林鄭月娥下台
            </h4>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/16 14:00</h3>
            <div class="image">
              <img
                class="image"
                alt="在維多利亞公園內等待出發的遊行人士"
                src="../assets/img/0616/01.jpg"
              />
              <span
                ><a
                  href="https://zh.wikipedia.org/wiki/2019%E5%B9%B46%E6%9C%8816%E6%97%A5%E5%8F%8D%E5%B0%8D%E9%80%83%E7%8A%AF%E6%A2%9D%E4%BE%8B%E4%BF%AE%E8%A8%82%E8%8D%89%E6%A1%88%E9%81%8A%E8%A1%8C#/media/File:Hong_Kong_Demonstration_20190616_Victoria_Park-2.jpg"
                  target="_blank"
                  >Baycrest</a
                ></span
              >
            </div>
            <h3 class="box-title">在維多利亞公園內等待出發的遊行人士</h3>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/16 14:43</h3>
            <h2 class="box-title">一樣由維園草坪起步，遊行至金鐘立法會</h2>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/16 14:50</h3>
            <h2 class="box-title">
              部分人改由告士打道離開維園，至波士富街匯合大隊
            </h2>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/16 15:09</h3>
            <div class="image">
              <img
                class="image"
                alt="遊行人士途徑銅鑼灣軒尼詩道"
                src="../assets/img/0616/02.jpg"
              />
              <span
                ><a
                  href="https://zh.wikipedia.org/wiki/2019%E5%B9%B46%E6%9C%8816%E6%97%A5%E5%8F%8D%E5%B0%8D%E9%80%83%E7%8A%AF%E6%A2%9D%E4%BE%8B%E4%BF%AE%E8%A8%82%E8%8D%89%E6%A1%88%E9%81%8A%E8%A1%8C#/media/File:Hong_Kong_Demonstration_20190616_Causeway_Bay-1.jpg"
                  target="_blank"
                  >Baycrest</a
                ></span
              >
            </div>
            <h3 class="box-title">遊行人士途徑銅鑼灣軒尼詩道</h3>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/16 15:36</h3>
            <div class="image">
              <img
                class="image"
                alt="灣仔軒尼詩道警察總部附近遊行情況"
                src="../assets/img/0616/03.jpg"
              />
              <span
                ><a
                  href="https://zh.wikipedia.org/wiki/2019%E5%B9%B46%E6%9C%8816%E6%97%A5%E5%8F%8D%E5%B0%8D%E9%80%83%E7%8A%AF%E6%A2%9D%E4%BE%8B%E4%BF%AE%E8%A8%82%E8%8D%89%E6%A1%88%E9%81%8A%E8%A1%8C#/media/File:Hong_Kong_Demonstration_20190616_Wan_Chai-2.jpg"
                  target="_blank"
                  >Baycrest</a
                ></span
              >
            </div>
            <h3 class="box-title">灣仔軒尼詩道警察總部附近遊行情況</h3>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/16 16:05</h3>
            <h2 class="box-title">首批遊行人士抵達金鐘添美道終點</h2>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/16 16:02</h3>
            <h2 class="box-title">因人潮過多開放駱克道分流遊行人士</h2>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/16 16:22</h3>
            <h2 class="box-title">
              最外圍的告士打道也開放一條行車線分流示威者
            </h2>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/16 16:38</h3>
            <h2 class="box-title">謝斐道行車線亦已開放</h2>
          </div>
        </div>
        <div class="cut cut-start" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/16 17:30</h3>
            <h2 class="box-title">下午5時半，莊士敦道亦開放予市民遊行</h2>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/16 18:40</h3>
            <div class="image">
              <img
                class="image"
                alt="遊行人士再次佔領夏慤道所有行車線"
                src="../assets/img/0616/04.jpg"
              />
              <span
                ><a
                  href="https://zh.wikipedia.org/wiki/2019%E5%B9%B46%E6%9C%8816%E6%97%A5%E5%8F%8D%E5%B0%8D%E9%80%83%E7%8A%AF%E6%A2%9D%E4%BE%8B%E4%BF%AE%E8%A8%82%E8%8D%89%E6%A1%88%E9%81%8A%E8%A1%8C#/media/File:Protesters_occupy_Harcourt_Road_aerial_view_20190616.jpg"
                  target="_blank"
                  >Wpcpey</a
                ></span
              >
            </div>
            <h3 class="box-title">遊行人士再次佔領夏慤道所有行車線</h3>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/16 20:06</h3>
            <div class="image">
              <img
                class="image"
                alt="夏慤道的巴士欲緩慢前進離開現場時，位於該處的人群即散開讓出路面使車輛駛離"
                src="../assets/img/0616/05.jpg"
              />
              <span
                ><a
                  href="https://zh.wikipedia.org/wiki/2019%E5%B9%B46%E6%9C%8816%E6%97%A5%E5%8F%8D%E5%B0%8D%E9%80%83%E7%8A%AF%E6%A2%9D%E4%BE%8B%E4%BF%AE%E8%A8%82%E8%8D%89%E6%A1%88%E9%81%8A%E8%A1%8C#/media/File:Sea_of_protesters_giving_way_to_buses_to_leave_Harcourt_Road_20190616.jpg"
                  target="_blank"
                  >Wpcpey</a
                ></span
              >
            </div>
            <h3 class="box-title">
              夏慤道的人群讓出路面使車輛駛離，香港版「摩西分紅海」
            </h3>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/16 21:48</h3>
            <div class="image">
              <img
                class="image"
                alt="金鐘道的遊行人士主動讓路予救護車經過"
                src="../assets/img/0616/06.jpg"
              />
              <span
                ><a
                  href="https://zh.wikipedia.org/wiki/2019%E5%B9%B46%E6%9C%8816%E6%97%A5%E5%8F%8D%E5%B0%8D%E9%80%83%E7%8A%AF%E6%A2%9D%E4%BE%8B%E4%BF%AE%E8%A8%82%E8%8D%89%E6%A1%88%E9%81%8A%E8%A1%8C#/media/File:190616_HK_Protest_Incendo_17.jpg"
                  target="_blank"
                  >Studio Incendo</a
                ></span
              >
            </div>
            <h3 class="box-title">金鐘道的遊行人士也主動讓路予救護車經過</h3>
          </div>
        </div>
        <div class="cut" v-bind:style="cutStyle">
          <div class="box">
            <h3>2019/06/17 02:00</h3>
            <h2 class="box-title">
              大多數遊行市民雖然已經離開，但示威者仍控制附近車道，直到早上八點夏慤道才開放通行
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="cut cover" v-bind:style="cutStyle">
      <h5 class="footer">
        資料來源:
        <a
          target="_blank"
          href="https://zh.wikipedia.org/wiki/%E5%8F%8D%E5%B0%8D%E9%80%83%E7%8A%AF%E6%A2%9D%E4%BE%8B%E4%BF%AE%E8%A8%82%E8%8D%89%E6%A1%88%E9%81%8A%E8%A1%8C%E8%88%87%E9%9B%86%E6%9C%83%E5%88%97%E8%A1%A8"
          >Wikipedia</a
        >&nbsp;&nbsp;|&nbsp;&nbsp;製作：<a
          href="https://github.com/abel1105/hk-extradition-law"
          target="_blank"
          >Abel</a
        ><br />LOGO：
        <a href="https://www.facebook.com/hkantiextradition/"
          >Hong Kong Anti Extradition Law</a
        >
      </h5>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
// @ is an alias to /src
import Map from "../components/Map.vue";
import { getVisualCubicRatio, getScrollTop } from "../helpers/scroll";

export default {
  name: "home",
  components: {
    Map
  },
  data() {
    return {
      isLoaded: false,
      height: window.innerHeight,
      width: document.documentElement.clientWidth,
      titleStyle: {
        color: "rgba(179, 179, 179, 1)"
      },
      headStyle: {
        background: "rgba(0, 0, 0, 0.8)",
        color: "rgba(255, 0, 0, 0)"
      },
      worldMap: {},
      HKMap: {},
      HKRoad: {},
      HKMarch: {}
    };
  },
  mounted() {
    this.bind();
    this.fetchData();
  },
  destroyed() {
    this.unbind();
  },
  computed: {
    cutStyle: function() {
      return {
        height: `${this.height}px`
      };
    }
  },
  methods: {
    bind() {
      window.addEventListener("scroll", this.scroll);
      window.addEventListener("resize", this.resize);
    },
    unbind() {
      window.removeEventListener("scroll", this.scroll);
      window.removeEventListener("resize", this.resize);
    },
    resize() {
      if (this.width !== document.documentElement.clientWidth) {
        this.height = window.innerHeight;
        this.width = document.documentElement.clientWidth;
      }
    },
    scroll() {
      const zeroCutRatio = getVisualCubicRatio(
        getScrollTop("#cut-0", true),
        this.height
      );
      const headCutRatio = getVisualCubicRatio(
        getScrollTop("#cut-head"),
        this.height
      );

      this.titleStyle = {
        ...this.titleStyle,
        color: `rgba(179, 179, 179, ${zeroCutRatio})`
      };
      this.headStyle = {
        ...this.headStyle,
        color: `rgba(255, 0, 0, ${headCutRatio})`
      };
    },
    fetchData() {
      Promise.all([
        d3.json("./data/hk.json"),
        d3.json("./data/hk_highway.json"),
        d3.json("./data/hk_march.json")
      ])
        .then(([HKMap, HKRoad, HKMarch]) => {
          this.HKMap = HKMap;
          this.HKRoad = HKRoad;
          this.HKMarch = HKMarch;
          this.isLoaded = true;
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.error(err);
        });
    }
  }
};
</script>

<style>
.home {
  height: 100%;
}
.title {
  font-size: 60px;
  color: #b3b3b3;
  margin-bottom: 0;
  background: rgba(0, 0, 0, 0.7);
}
@media (max-width: 600px) {
  .title {
    font-size: 40px;
  }
}
.cover {
  background: url("../assets/cover.jpg") no-repeat center center;
  background-size: contain;
}
.space {
  letter-spacing: 0.5em;
}
.cut {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
  padding: 20px;
}
.cut-bottom {
  justify-content: flex-end;
}
.cut-start {
  justify-content: flex-start;
}
svg path {
  fill: currentColor;
}
.head {
  height: 60vh;
}
.content-wrap {
  position: relative;
}
.map-content-wrap {
  position: absolute;
  top: 0;
  width: 100%;
}
.box {
  background: rgba(0, 0, 0, 0.5);
  width: 80%;
  max-width: 600px;
  padding: 5px 10px;
}
.box-title {
  color: #fff;
}
.image {
  position: relative;
}
.image img {
  opacity: 0.5;
  max-width: 100%;
  max-height: 70vh;
}
.image:hover img {
  opacity: 1;
}
.image span {
  position: absolute;
  bottom: 15px;
  right: 10px;
  background: #b3b3b3;
  color: #000;
  padding: 0 5px;
  font-size: 11px;
}
a {
  text-decoration: none;
  color: #000;
}
.footer {
  color: #b3b3b3;
  background: rgba(0, 0, 0, 0.7);
  padding: 5px 10px;
}
.footer a {
  color: #b3b3b3;
}
</style>
