(function () {
  'use strict';

  function setLanguage(language) {
    var selected = language === 'zh' ? 'zh' : 'en';
    var root = document.documentElement;
    root.setAttribute('data-language', selected);
    root.setAttribute('lang', selected === 'zh' ? 'zh-CN' : 'en');
    document.querySelectorAll('[data-set-language]').forEach(function (button) {
      button.setAttribute('aria-pressed', button.getAttribute('data-set-language') === selected ? 'true' : 'false');
    });
    try {
      window.localStorage.setItem('xinwang-language', selected);
    } catch (error) {
      // Private browsing can disable localStorage; the page still works.
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var saved = 'en';
    try {
      saved = window.localStorage.getItem('xinwang-language') || 'en';
    } catch (error) {
      saved = 'en';
    }
    setLanguage(saved);
    document.querySelectorAll('[data-set-language]').forEach(function (button) {
      button.addEventListener('click', function () {
        setLanguage(button.getAttribute('data-set-language'));
      });
    });
  });
}());
