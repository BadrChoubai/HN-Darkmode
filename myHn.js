var head = document.head || document.getElementsByTagName("head")[0],
  style = document.createElement("style");

style.type = "text/css";
style.innerHTML = `
    body,
    #hnmain {
        background: #2f2f2f;
    }

    a.storylink,
    a.morelink {
        color: #fff;
    }
`;

head.appendChild(style);
