$(document).ready(function () {
  let amenities = {};
  $('.amenities-list').change(function (event) {
    let amenityId = $(this).attr('data-id');
    let amenityName = $(this).attr('data-name');

    if (event['target']['checked']) {
      amenities[amenityId] = amenityName;
    } else {
      delete amenities[amenityId];
    }
    $('.amenities h4').text(Object.values(amenities));
  });
});
