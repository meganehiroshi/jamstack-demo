/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

//import $ from 'jquery'
const $ = require("jquery")

exports.onInitialClientRender = ({ location }) => {
  // ここにコード
  console.log("onRouteUpdate");
  // $(window).on('load', function() {
    console.log("onRouteUpdate window onload");
    $("h1").addClass("hogeClass");
    $("h1").css({"color":"red"});
    $("h1").text("yeah!");
  // });


};
