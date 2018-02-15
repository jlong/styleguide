---
section: Styles
title: Buttons
tags: buttons, hover, button groups
---

# Buttons

Buttons are marked up using a `button` class with a couple of variations to adjust size or color. You can use either an `<a>` tag or a `<button>` tag. Buttons also respect the disabled `attribute`, or a `disabled` class name.

<example project="admin">
  <a class="button">Link</a>
  <button class="button">Button</button>
  <button class="button" disabled="">Disabled</button>
</example>

## Multiple sizes

Buttons come in a three sizes. Medium sized buttons are the default, but you can make them smaller with the `small` class, or larger with the `large` class.

<example project="admin">
  <button class="button small">Small</button>
  <button class="button">Regular</button>
  <button class="button large">Large</button>
</example>

## Button types

There are a couple of different kinds of buttons. With multiple buttons use the `primary` and `secondary` classes to change the prominence of the buttons. Use the `danger` class to make a button red and indicate that it has a destructive action.

<example project="admin">
  <button class="button">Regular</button>
  <button class="button primary">Primary</button>
  <button class="button secondary">Secondary</button>
  <button class="button danger">Danger</button>
  <button class="button applied">Applied</button>
</example>

Add the `disabled` attribute to indicate that a button is disabled.

<example project="admin">
  <button class="button" disabled="">Regular</button>
  <button class="button primary" disabled="">Primary</button>
  <button class="button secondary" disabled="">Secondary</button>
  <button class="button danger" disabled="">Danger</button>
  <button class="button applied" disabled="">Applied</button>
</example>

## Hover buttons

Use the `hover-button` class instead of the button class in situations where too many borders can be overwhelming. Hover buttons respond to all of regular button modifier classes so you can use `small`, `danger`, etc to modify the style of the button. Most hover buttons should also use the secondary modifier class.

<example project="admin">
  <button class="hover-button secondary">Hover me!</button>
</example>

## Button groups

Buttons can be combined into groups by wrapping them with a container element with a `button-group` class. Note that the markup should not contain spaces between the buttons.

Selection can be indicated with an `is-selected` class.

<example project="admin">
  <div class="button-group">
    <button class="button secondary is-selected">Left</button><button class="button secondary">Middle</button><button class="button secondary">Right</button>
  </div>
</example>


## Control groups

To create more complex controls, buttons can be combined with textboxes if you wrap them with a `control-group` class.

<example project="admin">
  <div class="control-group mb1">
    <input class="textbox" placeholder="Combobox">
    <button class="button secondary slim">
    <i class="down-triangle-18px-icon"></i>
    </button>
  </div>
  <div class="control-group">
    <input class="textbox search" placeholder="Search" size="16">
    <button class="button slim applied">
    <i class="close-18px-icon"></i>
    </button>
  </div>
</example>
