import React from "react";
import "../Components/Card.css";
export default function Card(props) {
  function clickedClassHandler(name, callback) {
    // apply click handler to all elements with matching className
    var allElements = document.body.getElementsByTagName("*");

    for (var x = 0, len = allElements.length; x < len; x++) {
      if (allElements[x].className === name) {
        allElements[x].onclick = handleClick;
      }
    }

    function handleClick() {
      var elmParent = this.parentNode;
      var parentChilds = elmParent.childNodes;
      var index = 0;

      for (var x = 0; x < parentChilds.length; x++) {
        if (parentChilds[x] === this) {
          break;
        }

        if (parentChilds[x].className === name) {
          index++;
        }
      }

      callback.call(this, index);
    }
  }

  return (
    <div>
      <div
        class="card"
        id="idcard"
        style={{ backgroundColor: props.color }}
        onClick={
          // function myFunction() {
          //   var element = document.getElementById("idcard");
          //   element.classList.toggle("card1");
          // }
          clickedClassHandler("card", function (index) {
            // do something with the index

            // 'this' refers to the element
            // so you could do something with the element itself
            // this[index].style.border = "5px solid green";
            // alert("clicked");
            // var element = document.getElementsByClassName("card");
            this.classList.toggle("card1");
            // const para = document.createElement("p");
            // const node = document.createTextNode("This is new.");
            // para.appendChild(node);
          })
        }
      >
        <div class="container">
          <p>
            <b>{props.title}</b>
          </p>
        </div>
        <img src={props.imgSrc} alt="Avatar" />
      </div>
    </div>
  );
}
