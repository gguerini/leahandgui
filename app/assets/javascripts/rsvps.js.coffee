$(document).ready ->

  presence_wedding_true = $("input#rsvp_presence_wedding_true")
  presence_wedding_false = $("input#rsvp_presence_wedding_false")
  presence_party_true = $("input#rsvp_presence_party_true")
  presence_party_false = $("input#rsvp_presence_party_false")
  quantity = $("input#rsvp_quantity")

  presence_wedding_true.bind 'click', ->
    enable_fields()

  presence_wedding_false.bind 'click', ->
    disable_fields()

  enable_fields = ->
    presence_party_true.removeAttr('disabled')
    presence_party_false.removeAttr('disabled')
    quantity.removeAttr('disabled').val 1

  disable_fields = ->
    presence_party_true.attr('disabled', true)
    presence_party_false.attr('disabled', true)
    quantity.attr('disabled', true).val 0

  if $(presence_wedding_false).is(':checked')
    disable_fields()