import React from 'react';
import './Logo.css'

function Logo() {
    return (
        <svg id="ocd-logo" width="133" height="64" viewBox="0 0 133 64"
            xmlns="http://www.w3.org/2000/svg">
            <g stroke="#854642" fill="#854642" stroke-width="2" stroke-opacity="0" fill-opacity="0">
                <path d="M86.0528 7.71789L86.0681 7.70253L86.0841 7.68784C86.899 6.94091 87.9292 6.6 89.0849 6.6H103.71C112.295 6.6 119.102 8.95531 123.988 13.7891C128.879 18.6274 131.26 25.4395 131.26 34.075C131.26 42.7076 128.881 49.4963 123.988 54.2859C119.15 59.1222 112.34 61.475 103.71 61.475H89.0849C87.9292 61.475 86.899 61.1341 86.0841 60.3872L86.0681 60.3725L86.0528 60.3571C85.2856 59.5899 84.9349 58.5951 84.9349 57.475V10.6C84.9349 9.47989 85.2856 8.48508 86.0528 7.71789ZM122.885 34.075C122.885 27.1462 121.207 22.1347 118.029 18.8518C114.856 15.575 110.022 13.85 103.335 13.85H93.0849V54.225H103.335C110.023 54.225 114.858 52.5058 118.03 49.2406C121.208 45.9702 122.885 40.978 122.885 34.075Z" fill="#854642" />
                <path d="M59.6431 58.7065L59.643 58.7065L59.6517 58.7116C63.4813 60.9674 67.9882 62.075 73.1343 62.075C76.5905 62.075 79.8547 61.533 82.9196 60.4421L82.9196 60.4422L82.9285 60.4389C86.0407 59.2978 88.7544 57.6832 91.057 55.5899L91.0626 55.5848L91.0682 55.5795C92.0482 54.6608 92.5843 53.5297 92.5843 52.225C92.5843 51.2886 92.3305 50.4319 91.7651 49.7253C91.2103 49.0318 90.4649 48.6 89.5593 48.6C88.6752 48.6 87.7537 48.9949 86.841 49.5854L86.8029 49.6101L86.7671 49.6381C84.2645 51.601 82.0278 52.9383 80.0533 53.6905C78.0854 54.4402 75.834 54.825 73.2843 54.825C67.7224 54.825 63.5537 53.0401 60.6296 49.5623C57.7292 46.0036 56.2093 40.8624 56.2093 34C56.2093 27.1852 57.7302 22.0952 60.6297 18.5876C63.5555 15.0583 67.7243 13.25 73.2843 13.25C75.8872 13.25 78.1346 13.6358 80.0457 14.3816L80.0457 14.3816L80.0533 14.3845C82.0278 15.1367 84.2645 16.474 86.7671 18.4369L86.8029 18.4649L86.841 18.4896C87.7537 19.0801 88.6752 19.475 89.5593 19.475C90.4649 19.475 91.2103 19.0432 91.7651 18.3497L91.7795 18.3318L91.793 18.3132C92.3212 17.587 92.5843 16.7547 92.5843 15.85C92.5843 14.5453 92.0482 13.4142 91.0682 12.4955L91.0626 12.4902L91.057 12.4851C88.7533 10.3909 86.038 8.80064 82.9242 7.70951C79.8582 6.56757 76.5923 6 73.1343 6C67.9862 6 63.4775 7.13357 59.6474 9.44092C55.8173 11.6982 52.8639 14.976 50.7855 19.2366L50.7855 19.2366L50.7833 19.2412C48.7552 23.4534 47.7593 28.3827 47.7593 34C47.7593 39.6662 48.7548 44.6438 50.7812 48.9045L50.7844 48.9112L50.7876 48.9178C52.867 53.1285 55.8193 56.4018 59.6431 58.7065Z" />
                <path d="M17.7285 58.6283L17.7338 58.6315C21.5617 60.9387 26.0208 62.075 31.075 62.075C36.1277 62.075 40.5635 60.9394 44.3439 58.6299C48.1686 56.3239 51.0969 53.0481 53.126 48.8338L53.1281 48.8295C55.1539 44.57 56.15 39.6177 56.15 34C56.15 28.3857 55.1551 23.4586 53.1292 19.2479C51.1511 14.9825 48.246 11.7013 44.4146 9.44252C40.6336 7.13384 36.1736 6 31.075 6C25.9737 6 21.4896 7.135 17.6605 9.4425C13.8776 11.7022 10.9741 14.9832 8.94694 19.2455L8.94692 19.2455L8.94468 19.2503C6.96918 23.4612 6 28.4126 6 34.075C6 39.6923 6.99591 44.6216 9.024 48.8338C11.0518 53.0454 13.9534 56.3213 17.7285 58.6283ZM43.3551 49.5618L43.3543 49.5629C40.4742 53.0469 36.4272 54.825 31.075 54.825C25.7291 54.825 21.6551 53.0261 18.7223 49.4897C15.8197 45.9298 14.3 40.8119 14.3 34C14.3 27.1852 15.821 22.0952 18.7204 18.5876C21.6534 15.0497 25.728 13.25 31.075 13.25C36.4805 13.25 40.551 15.0303 43.4293 18.5121C46.328 22.0187 47.85 27.1328 47.85 34C47.85 40.8628 46.305 46.0033 43.3551 49.5618Z" />
            </g>
            <g stroke="#426185" fill="#426185" stroke-width="2" stroke-opacity="0" fill-opacity="0">
                <path d="M84.0528 5.71789L84.0681 5.70253L84.0841 5.68784C84.899 4.94091 85.9292 4.6 87.0849 4.6H101.71C110.295 4.6 117.102 6.95531 121.988 11.7891C126.879 16.6274 129.26 23.4395 129.26 32.075C129.26 40.7076 126.881 47.4963 121.988 52.2859C117.15 57.1222 110.34 59.475 101.71 59.475H87.0849C85.9292 59.475 84.899 59.1341 84.0841 58.3872L84.0681 58.3725L84.0528 58.3571C83.2856 57.5899 82.9349 56.5951 82.9349 55.475V8.6C82.9349 7.47989 83.2856 6.48508 84.0528 5.71789ZM120.885 32.075C120.885 25.1462 119.207 20.1347 116.029 16.8518C112.856 13.575 108.022 11.85 101.335 11.85H91.0849V52.225H101.335C108.023 52.225 112.858 50.5058 116.03 47.2406C119.208 43.9702 120.885 38.978 120.885 32.075Z" />
                <path d="M57.6431 56.7065L57.643 56.7065L57.6517 56.7116C61.4813 58.9674 65.9882 60.075 71.1343 60.075C74.5905 60.075 77.8547 59.533 80.9196 58.4421L80.9196 58.4422L80.9285 58.4389C84.0407 57.2978 86.7544 55.6832 89.057 53.5899L89.0626 53.5848L89.0682 53.5795C90.0482 52.6608 90.5843 51.5297 90.5843 50.225C90.5843 49.2886 90.3305 48.4319 89.7651 47.7253C89.2103 47.0318 88.4649 46.6 87.5593 46.6C86.6752 46.6 85.7537 46.9949 84.841 47.5854L84.8029 47.6101L84.7671 47.6381C82.2645 49.601 80.0278 50.9383 78.0533 51.6905C76.0854 52.4402 73.834 52.825 71.2843 52.825C65.7224 52.825 61.5537 51.0401 58.6296 47.5623C55.7292 44.0036 54.2093 38.8624 54.2093 32C54.2093 25.1852 55.7302 20.0952 58.6297 16.5876C61.5555 13.0583 65.7243 11.25 71.2843 11.25C73.8872 11.25 76.1346 11.6358 78.0457 12.3816L78.0457 12.3816L78.0533 12.3845C80.0278 13.1367 82.2645 14.474 84.7671 16.4369L84.8029 16.4649L84.841 16.4896C85.7537 17.0801 86.6752 17.475 87.5593 17.475C88.4649 17.475 89.2103 17.0432 89.7651 16.3497L89.7795 16.3318L89.793 16.3132C90.3212 15.587 90.5843 14.7547 90.5843 13.85C90.5843 12.5453 90.0482 11.4142 89.0682 10.4955L89.0626 10.4902L89.057 10.4851C86.7533 8.39086 84.038 6.80064 80.9242 5.70951C77.8582 4.56757 74.5923 4 71.1343 4C65.9862 4 61.4775 5.13357 57.6474 7.44092C53.8173 9.69819 50.8639 12.976 48.7855 17.2366L48.7855 17.2366L48.7833 17.2412C46.7552 21.4534 45.7593 26.3827 45.7593 32C45.7593 37.6662 46.7548 42.6438 48.7812 46.9045L48.7844 46.9112L48.7876 46.9178C50.867 51.1285 53.8193 54.4018 57.6431 56.7065Z" />
                <path d="M15.7285 56.6283L15.7338 56.6315C19.5617 58.9387 24.0208 60.075 29.075 60.075C34.1277 60.075 38.5635 58.9394 42.3439 56.6299C46.1686 54.3239 49.0969 51.0481 51.126 46.8338L51.1281 46.8295C53.1539 42.57 54.15 37.6177 54.15 32C54.15 26.3857 53.1551 21.4586 51.1292 17.2479C49.1511 12.9825 46.246 9.70129 42.4146 7.44252C38.6336 5.13384 34.1736 4 29.075 4C23.9737 4 19.4896 5.135 15.6605 7.4425C11.8776 9.7022 8.97414 12.9832 6.94694 17.2455L6.94692 17.2455L6.94468 17.2503C4.96918 21.4612 4 26.4126 4 32.075C4 37.6923 4.99591 42.6216 7.024 46.8338C9.05178 51.0454 11.9534 54.3213 15.7285 56.6283ZM41.3551 47.5618L41.3543 47.5629C38.4742 51.0469 34.4272 52.825 29.075 52.825C23.7291 52.825 19.6551 51.0261 16.7223 47.4897C13.8197 43.9298 12.3 38.8119 12.3 32C12.3 25.1852 13.821 20.0952 16.7204 16.5876C19.6534 13.0497 23.728 11.25 29.075 11.25C34.4805 11.25 38.551 13.0303 41.4293 16.5121C44.328 20.0187 45.85 25.1328 45.85 32C45.85 38.8628 44.305 44.0033 41.3551 47.5618Z" />
            </g>
            <g class="logo-white" stroke="#FFF" stroke-width="2">
                <path d="M12.7285 53.6283L12.7338 53.6315C16.5617 55.9387 21.0208 57.075 26.075 57.075C31.1277 57.075 35.5635 55.9394 39.3439 53.6299C43.1686 51.3239 46.0969 48.0481 48.126 43.8338L48.1281 43.8295C50.1539 39.57 51.15 34.6177 51.15 29C51.15 23.3857 50.1551 18.4586 48.1292 14.2479C46.1511 9.98247 43.246 6.70129 39.4146 4.44252C35.6336 2.13384 31.1736 1 26.075 1C20.9737 1 16.4896 2.135 12.6605 4.4425C8.87762 6.7022 5.97414 9.98316 3.94694 14.2455L3.94692 14.2455L3.94468 14.2503C1.96918 18.4612 1 23.4126 1 29.075C1 34.6923 1.99591 39.6216 4.024 43.8338C6.05178 48.0454 8.95339 51.3213 12.7285 53.6283ZM38.3551 44.5618L38.3543 44.5629C35.4742 48.0469 31.4272 49.825 26.075 49.825C20.7291 49.825 16.6551 48.0261 13.7223 44.4897C10.8197 40.9298 9.3 35.8119 9.3 29C9.3 22.1852 10.821 17.0952 13.7204 13.5876C16.6534 10.0497 20.728 8.25 26.075 8.25C31.4805 8.25 35.551 10.0303 38.4293 13.5121C41.328 17.0187 42.85 22.1328 42.85 29C42.85 35.8628 41.305 41.0033 38.3551 44.5618Z" />
                <path d="M54.6431 53.7065L54.643 53.7065L54.6517 53.7116C58.4813 55.9674 62.9882 57.075 68.1343 57.075C71.5905 57.075 74.8547 56.533 77.9196 55.4421L77.9196 55.4422L77.9285 55.4389C81.0407 54.2978 83.7544 52.6832 86.057 50.5899L86.0626 50.5848L86.0682 50.5795C87.0482 49.6608 87.5843 48.5297 87.5843 47.225C87.5843 46.2886 87.3305 45.4319 86.7651 44.7253C86.2103 44.0318 85.4649 43.6 84.5593 43.6C83.6752 43.6 82.7537 43.9949 81.841 44.5854L81.8029 44.6101L81.7671 44.6381C79.2645 46.601 77.0278 47.9383 75.0533 48.6905C73.0854 49.4402 70.834 49.825 68.2843 49.825C62.7224 49.825 58.5537 48.0401 55.6296 44.5623C52.7292 41.0036 51.2093 35.8624 51.2093 29C51.2093 22.1852 52.7302 17.0952 55.6297 13.5876C58.5555 10.0583 62.7243 8.25 68.2843 8.25C70.8872 8.25 73.1346 8.63578 75.0457 9.38158L75.0457 9.38161L75.0533 9.38449C77.0278 10.1367 79.2645 11.474 81.7671 13.4369L81.8029 13.4649L81.841 13.4896C82.7537 14.0801 83.6752 14.475 84.5593 14.475C85.4649 14.475 86.2103 14.0432 86.7651 13.3497L86.7795 13.3318L86.793 13.3132C87.3212 12.587 87.5843 11.7547 87.5843 10.85C87.5843 9.54527 87.0482 8.41423 86.0682 7.49546L86.0626 7.49022L86.057 7.48506C83.7533 5.39086 81.038 3.80064 77.9242 2.70951C74.8582 1.56757 71.5923 1 68.1343 1C62.9862 1 58.4775 2.13357 54.6474 4.44092C50.8173 6.69819 47.8639 9.97597 45.7855 14.2366L45.7855 14.2366L45.7833 14.2412C43.7552 18.4534 42.7593 23.3827 42.7593 29C42.7593 34.6662 43.7548 39.6438 45.7812 43.9045L45.7844 43.9112L45.7876 43.9178C47.867 48.1285 50.8193 51.4018 54.6431 53.7065Z" />
                <path d="M81.0528 2.71789L81.0681 2.70253L81.0841 2.68784C81.899 1.94091 82.9292 1.6 84.0849 1.6H98.7099C107.295 1.6 114.102 3.95531 118.988 8.78909C123.879 13.6274 126.26 20.4395 126.26 29.075C126.26 37.7076 123.881 44.4963 118.988 49.2859C114.15 54.1222 107.34 56.475 98.7099 56.475H84.0849C82.9292 56.475 81.899 56.1341 81.0841 55.3872L81.0681 55.3725L81.0528 55.3571C80.2856 54.5899 79.9349 53.5951 79.9349 52.475V5.6C79.9349 4.47989 80.2856 3.48508 81.0528 2.71789ZM117.885 29.075C117.885 22.1462 116.207 17.1347 113.029 13.8518C109.856 10.575 105.022 8.85 98.3349 8.85H88.0849V49.225H98.3349C105.023 49.225 109.858 47.5058 113.03 44.2406C116.208 40.9702 117.885 35.978 117.885 29.075Z" />
            </g>
        </svg>
    );
}

export default Logo;