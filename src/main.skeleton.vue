<template>
  <div id="zmz-loading">
    <div id="zmz-loader"></div>
    <div class="zmz-tip">
      <span>加</span>
      <span>载</span>
      <span>中</span>
      <span>请</span>
      <span>稍</span>
      <span>后</span>
      <span>...</span>
    </div>
  </div>
</template>

<style>
  #zmz-loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
    background: #f15c5c;
  }

  #zmz-loader {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: 3px solid transparent;
    /* COLOR 1 */
    border-top-color: #FFF;
    -webkit-animation: spin 2s linear infinite;
    /* Chrome, Opera 15+, Safari 5+ */
    -ms-animation: spin 2s linear infinite;
    /* Chrome, Opera 15+, Safari 5+ */
    -moz-animation: spin 2s linear infinite;
    /* Chrome, Opera 15+, Safari 5+ */
    -o-animation: spin 2s linear infinite;
    /* Chrome, Opera 15+, Safari 5+ */
    animation: spin 2s linear infinite;
    /* Chrome, Firefox 16+, IE 10+, Opera */
    z-index: 1001;
  }

  #zmz-loader:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    /* COLOR 2 */
    border-top-color: #FFF;
    -webkit-animation: spin 3s linear infinite;
    /* Chrome, Opera 15+, Safari 5+ */
    -moz-animation: spin 3s linear infinite;
    /* Chrome, Opera 15+, Safari 5+ */
    -o-animation: spin 3s linear infinite;
    /* Chrome, Opera 15+, Safari 5+ */
    -ms-animation: spin 3s linear infinite;
    /* Chrome, Opera 15+, Safari 5+ */
    animation: spin 3s linear infinite;
    /* Chrome, Firefox 16+, IE 10+, Opera */
  }

  #zmz-loader:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #FFF;
    /* COLOR 3 */
    -moz-animation: spin 1.5s linear infinite;
    /* Chrome, Opera 15+, Safari 5+ */
    -o-animation: spin 1.5s linear infinite;
    /* Chrome, Opera 15+, Safari 5+ */
    -ms-animation: spin 1.5s linear infinite;
    /* Chrome, Opera 15+, Safari 5+ */
    -webkit-animation: spin 1.5s linear infinite;
    /* Chrome, Opera 15+, Safari 5+ */
    animation: spin 1.5s linear infinite;
    /* Chrome, Firefox 16+, IE 10+, Opera */
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      /* Chrome, Opera 15+, Safari 3.1+ */
      -ms-transform: rotate(0deg);
      /* IE 9 */
      transform: rotate(0deg);
      /* Firefox 16+, IE 10+, Opera */
    }

    100% {
      -webkit-transform: rotate(360deg);
      /* Chrome, Opera 15+, Safari 3.1+ */
      -ms-transform: rotate(360deg);
      /* IE 9 */
      transform: rotate(360deg);
      /* Firefox 16+, IE 10+, Opera */
    }
  }

  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      /* Chrome, Opera 15+, Safari 3.1+ */
      -ms-transform: rotate(0deg);
      /* IE 9 */
      transform: rotate(0deg);
      /* Firefox 16+, IE 10+, Opera */
    }

    100% {
      -webkit-transform: rotate(360deg);
      /* Chrome, Opera 15+, Safari 3.1+ */
      -ms-transform: rotate(360deg);
      /* IE 9 */
      transform: rotate(360deg);
      /* Firefox 16+, IE 10+, Opera */
    }
  }

  #zmz-loading .zmz-tip {
    font-family: 'Open Sans';
    color: #FFF;
    font-size: 19px;
    width: 100%;
    text-align: center;
    z-index: 9999999999999;
    position: absolute;
    top: 60%;
    opacity: 1;
    line-height: 30px;
  }

  #zmz-loading .zmz-tip span {
    font-weight: normal;
    font-style: italic;
    font-size: 16px;
    color: #FFF;
  }
</style>
