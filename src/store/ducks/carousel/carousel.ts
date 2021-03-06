const initialState = {
    items: [
        {
            url: 'https://www.iqconsultancy.ru/upload/iblock/660/MG_1_1_New_York_City-1.jpg'
        },
        {
            url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/25/13/74.jpg'
        },
        {
            url: 'https://www.planetware.com/photos-large/USNY/new-york-city-statue-of-liberty.jpg'
        },
        {
            url: 'https://media.cntraveler.com/photos/5a8f3b070e2cf839e9dbfa1d/master/w_1200,c_limit/NYC_GettyImages-640006562.jpg'
        },
        {
            url: 'https://turkishairlines.ssl.cdn.sdlmedia.com/637128604553104030HA.jpg'
        },
        {
            url: 'https://static01.nyt.com/images/2020/06/30/science/30virus-antibodies/merlin_170516229_e884481b-f3d1-4b38-8993-6fa9aba57562-mediumSquareAt3X.jpg'
        }
    ]
}

export type CarouselStateType = typeof initialState

export const carouselReducer = (state = initialState): CarouselStateType => {
    return state
}