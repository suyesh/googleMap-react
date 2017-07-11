export default function Infowindow(smo_name, description, size) {

  let content =
  '<div id="iw-container">' +
  `<div class="iw-title">${sign_category}</div>` +
  '<div class="iw-content">' +
  `<div class="iw-subTitle">${sign_name}</div>` +
  '<img src="http://maps.marnoto.com/en/5wayscustomizeinfowindow/images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' + `<p>${sign_description}</p>` + '<div class="iw-subTitle">Description</div>' +
  `<p>Size: ${sign_size}<br>` +
  `<br>Type: ${sign_type}</p>` +
  '</div>' +
  '<div class="iw-bottom-gradient"></div>' +
  '</div>';

  return content;

}
