<!doctype html>
<html lang="en">
<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>{{ title }}</title>

<link rel="apple-touch-icon" href="apple-touch-icon.png">
<!-- Place favicon.ico in the root directory -->

<!-- build:css styles/vendor.css -->
<!-- bower:css -->
<!-- endbower -->
<!-- endbuild -->

<!-- build:css styles/main.css -->
<link rel="stylesheet" href="styles/main.css">
<!-- endbuild -->

</head>
<body>

<div class="sg-frame sg-show-nav">
  <div class="sg-frame-nav">
    <ul class="sg-nav" data-nav>
      <li class="sg-nav-item sg-level-1"><a class="sg-nav-item-target" href="javascript:void(0)" data-nav-item>Typography</a></li>

      <li>
        <span class="sg-nav-item sg-level-1">
          <a class="sg-nav-item-target" href="javascript:void(0)" data-expanded="false">
            Icons
            <i class="sg-nav-expander" data-expander></i>
          </a>
        </span>
        <ul class="sg-nav" style="display:none">
          <li class="sg-nav-item sg-level-2"><a class="sg-nav-item-target" href="javascript:void(0)" data-nav-item>Usage</a></li>
          <li class="sg-nav-item sg-level-2"><a class="sg-nav-item-target" href="javascript:void(0)" data-nav-item>12px</a></li>
          <li class="sg-nav-item sg-level-2"><a class="sg-nav-item-target" href="javascript:void(0)" data-nav-item>18px</a></li>
          <li class="sg-nav-item sg-level-2"><a class="sg-nav-item-target" href="javascript:void(0)" data-nav-item>24px</a></li>
          <li class="sg-nav-item sg-level-2"><a class="sg-nav-item-target" href="javascript:void(0)" data-nav-item>32px</a></li>
        </ul>
      </li>

      <li>
        <span class="sg-nav-item sg-level-1" data-expanded="true">
          <a class="sg-nav-item-target" href="javascript:void(0)">
            Components
            <i class="sg-nav-expander sg-is-expanded" data-expander></i>
          </a>
        </span>
        <ul class="sg-nav">
          <li class="sg-nav-item sg-level-2"><a class="sg-nav-item-target" href="javascript:void(0)" data-nav-item>Textboxes</a></li>
          <li class="sg-nav-item sg-level-2"><a class="sg-nav-item-target sg-is-selected" href="javascript:void(0)" data-nav-item>Buttons</a></li>
          <li class="sg-nav-item sg-level-2"><a class="sg-nav-item-target" href="javascript:void(0)" data-nav-item>Selectboxes</a></li>
          <li class="sg-nav-item sg-level-2"><a class="sg-nav-item-target" href="javascript:void(0)" data-nav-item>Checkboxes</a></li>
          <li class="sg-nav-item sg-level-2"><a class="sg-nav-item-target" href="javascript:void(0)" data-nav-item>Radio buttons</a></li>
          <li class="sg-nav-item sg-level-2"><a class="sg-nav-item-target" href="javascript:void(0)" data-nav-item>Pulldowns</a></li>
          <li class="sg-nav-item sg-level-2"><a class="sg-nav-item-target" href="javascript:void(0)" data-nav-item>Puffytabs</a></li>
          <li class="sg-nav-item sg-level-2"><a class="sg-nav-item-target" href="javascript:void(0)" data-nav-item>Pulldowns</a></li>
        </ul>
      </li>

      <li class="sg-nav-item sg-level-1"><a class="sg-nav-item-target" href="javascript:void(0)" data-nav-item>Dialogs</a></li>

      <li class="sg-nav-item sg-level-1"><a class="sg-nav-item-target" href="javascript:void(0)" data-nav-item>Graphs</a></li>

      <li>
        <span class="sg-nav-item sg-level-1">
          <a class="sg-nav-item-target" href="javascript:void(0)" data-expanded="true">
            Layout
            <i class="sg-nav-expander sg-is-expanded" data-expander></i>
          </a>
        </span>
        <ul class="sg-nav">
          <li class="sg-nav-item sg-level-2"><a class="sg-nav-item-target" href="javascript:void(0)" data-nav-item>Grids</a></li>
          <li class="sg-nav-item sg-level-2"><a class="sg-nav-item-target" href="javascript:void(0)" data-nav-item>Columns</a></li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="sg-frame-main">
    <div class="sg-frame-container typeset">
      {{{ contents }}}
    </div>
  </div>
</div>

<!-- @include ../images/symbols.svg -->

<!-- build:js scripts/vendor.js -->
<!-- bower:js -->
<script src="/bower_components/jquery/dist/jquery.js"></script>
<script src="/bower_components/ace-builds/src/ace.js"></script>
<script src="/bower_components/ace-builds/src/theme-xcode.js"></script>
<script src="/bower_components/ace-builds/src/mode-html.js"></script>
<script src="/bower_components/ace-builds/src/mode-javascript.js"></script>
<script src="/bower_components/ace-builds/src/mode-css.js"></script>
<script src="/bower_components/ace-builds/src/mode-scss.js"></script>
<!-- endbower -->
<!-- endbuild -->

<!-- build:js scripts/plugins.js -->
<!-- endbuild -->

<!-- build:js scripts/styleguide.js -->
<script src="scripts/navigation.js"></script>
<script src="scripts/code-previews.js"></script>
<!-- endbuild -->

</body>
</html>
