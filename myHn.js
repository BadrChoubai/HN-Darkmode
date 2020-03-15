var head = document.head || document.getElementsByTagName("head")[0],
  style = document.createElement("style");

style.type = "text/css";
style.innerHTML = `
    body, #hnmain { background: #272822; }
	a.storylink, a.morelink, span.commtext { color: #fff; }
	a.storylink:visited { color: #444444; }
`;

head.appendChild(style);
