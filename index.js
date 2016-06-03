/**
  * Copyright (C) 2016 yanni4night.com
  * index.js
  *
  * changelog
  * 2016-06-04[02:03:50]:revised
  *
  * @author yanni4night@gmail.com
  * @version 1.0.0
  * @since 1.0.0
  */
module.exports = {
    book: {
        assets: "./book",
        js: [
            "plugin.js"
        ],
        css: [
        ],
        html: {
            "head:end": function() {
                return "<script async src='https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML'></script>";
            }
        }
    }
};
