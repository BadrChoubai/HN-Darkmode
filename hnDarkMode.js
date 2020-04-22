const getAttributes = () => {
  let head = document.head || document.getElementsByTagName("head")[0];
  let storyLinks = document.getElementsByClassName("storylink");

  return {
    head,
    storyLinks,
  };
};

const changeStyles = (targetElement) => {
  style = document.createElement("style");

  // set style.innerHTML to darker colors, append to head
  style.type = "text/css";
  style.innerHTML = ` 
    body, #hnmain { background: #272822; }
    a.storylink, a.morelink, span.commtext { color: #fff; }
    a.storylink:visited { color: #444444; }
  `;
  targetElement.appendChild(style);
};

const changeLinkBehavior = (storyLinks) => {
  // Target all links, add target attribute, set to 'blank'
  Array.from(storyLinks).forEach((storyLink) =>
    storyLink.setAttribute("target", "blank")
  );
};

(function main() {
  const { ...attributes } = getAttributes();
  changeStyles(attributes.head);
  changeLinkBehavior(attributes.storyLinks);
})();
