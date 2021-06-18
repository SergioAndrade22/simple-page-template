<template>
    <div class="contact">
        <div id="map-container">
            <h1 class="title">
                {{title}}
            </h1>
            <l-map
                style="height: 80%; width: 100%"
                :zoom="zoom"
                :center="center"
                @update:zoom="zoomUpdated"
                @update:center="centerUpdated"
                @update:bounds="boundsUpdated"
            >
                <l-tile-layer :url="url"></l-tile-layer>
                <l-marker :lat-lng="markerLatLng">
                    <l-popup>{{popupText}}</l-popup>
                </l-marker>
            </l-map>
            <p class="footnote">
                <i class="fas fa-map-marker-alt"></i>
                {{location}}
            </p>
        </div>
        <div class="form-container">
            <div class="information-container">
                <div class="information__field">
                    <i class="fas fa-map-marker-alt social__icon"></i>
                    <p class="social__info">
                        <span>ADRESS: </span>{{location}}
                    </p>
                </div>

                <div class="information__field">
                    <i class="fas fa-phone-square-alt social__icon"></i>
                    <p class="social__info">
                        <span>PHONE: </span>{{phone}}
                    </p>
                </div>

                <div class="information__field">
                    <i class="fas fa-envelope social__icon"></i>
                    <p class="social__info">
                        <span>EMAIL: </span>{{email}}
                    </p>
                </div>

                <div class="information__field">
                    <i class="fas fa-globe social__icon"></i>
                    <p class="social__info">
                        <span>WEBSITE: </span><b-link class="social__link" to="/">familysize.heroku.com</b-link>
                    </p>
                </div>

                <div class="social-container">
                    <i class="fab fa-facebook social__icon--large"></i>
                    <i class="fab fa-twitter social__icon--large"></i>
                    <i class="fab fa-instagram social__icon--large"></i>
                </div>
            </div>
            <form class="form" action="" title="Contact Information">
                <div class="form__group">
                    <label class="form__field">
                        Your full name:
                        <input type="text" placeholder="Full Name" required>
                    </label>

                    <label class="form__field">
                        Your email:
                        <input type="email" placeholder="Email" required>
                    </label>
                </div>

                <label class="form__field">
                    What do you need?
                    <input type="text" placeholder="Subject" required>
                </label>

                <label class="form__field">
                    Tell us more!
                    <textarea cols="30" rows="5" placeholder="Message"></textarea>
                </label>

                <div class="button-container">
                    <b-button class="form__button">Send!</b-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { BLink, BButton } from 'bootstrap-vue'
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
import { Icon } from 'leaflet'

// The following 2 methods solve the missing marker icon
delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

Vue.component('b-button', BButton)
Vue.component('b-link', BLink)
Vue.component('l-map', LMap)
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-marker', LMarker)
Vue.component('l-popup', LPopup)

@Component
export default class Contact extends Vue {
    private url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    private zoom = 17
    private center = [37.563379, -77.465775]
    private markerLatLng = [37.563379, -77.465775]
    private bounds: [] = []
    private location = '2401 W Leigh St, Richmond, VA 23220, USA'
    private popupText = 'We are here!'
    private title = 'Where to find us?'
    private phone = '+1 202 555 0191'
    private email = 'familysizerestaurant@gmail.com'

    zoomUpdated (zoom: number): void {
      this.zoom = zoom
    }

    centerUpdated (center: number[]): void {
      this.center = center
    }

    boundsUpdated (bounds: []): void {
      this.bounds = bounds
    }
}
</script>

<style lang="sass" scoped>
#map-container
    height: 30rem

.button-container
    display: flex
    justify-content: flex-end

.social
    &-container
        display: flex
        flex-direction: row
        justify-content: space-between

    &__info
        display: inline
        margin: 1rem auto

    &__link
        display: inline

    &__icon
        padding-right: .4rem
        font-size: 1.5rem

        &--large
            font-size: 3rem

.information
    &__field
        @media only screen and (max-width: 600px)
            margin-bottom: 1em

    &-container
        width: 110%
        height: 110%
        padding: 1em 15% 1em 1em
        position: relative
        z-index: -1
        top: -1rem
        display: flex
        flex-direction: column
        justify-content: space-between
        background-color: var(--info)
        border-radius: 1rem
        color: var(--gray-dark)

        @media only screen and (max-width: 600px)
            top: 0
            padding: 1em
            width: 100%
            height: 100%
            margin-bottom: .4em

.contact
    margin: 1em

.title
    text-align: left
    font-size: min(8vw, 2em)

.footnote
    text-align: right
    font-size: 75%
    font-weight: 300
    line-height: 2
    align-self: center
    color: grey

.form
    &-container
        display: grid
        grid-template-columns: repeat(2, 1fr)

        @media only screen and (max-width: 600px)
            display: flex
            flex-direction: column
            justify-content: normal

    display: flex
    flex-direction: column
    background-color: var(--light)
    padding: .5em
    border-radius: 1rem
    justify-content: flex-end

    &__field
        display: flex
        flex-direction: column
        text-align: left
        background-color: inherit

    &__group
        display: flex
        flex-direction: row
        justify-content: space-between

        @media only screen and (max-width: 800px)
            flex-direction: column
            justify-content: normal

    &__group &__field
        width: 45%

        @media only screen and (max-width: 800px)
            width: 100%

    &__button
        text-align: right
        width: fit-content

input
    border: none
    border-bottom: 1px solid var(--gray)
    background-color: inherit
    outline: none

textarea
    border: none
    border-bottom: 1px solid var(--gray)
    background-color: inherit
    border: none
    overflow: auto
    resize: none
    outline: none

p
    white-space: pre-wrap
    overflow-wrap: break-word

::-webkit-scrollbar
  width: 10px

::-webkit-scrollbar-track
  background: #f1f1f1

::-webkit-scrollbar-thumb
  background: #888
  border-radius: 1rem

::-webkit-scrollbar-thumb:hover
  background: #555
</style>
