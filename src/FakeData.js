import sazek from './Image/Sajek.png';
import Sreemangal from './Image/Sreemongol.png';
import sundarban from './Image/sundorbon.png';
import sundorbon_bg from './Image/sundorbon_bg.jpg';
// ai import gula hoise pc r FakeData component theke jeta banano hoisay.


const FakeData = [
    {
        id: 0,
        name: "Cox's Bazar",
        details: "Cox's Bazar is located 150 km (93 mi) south of the divisional headquarter city of Chittagong. ... The beach in Cox's Bazar has a gentle slope and with an unbroken length of 155 km (96 mi) it is often termed the 'longest natural unbroken sea beach' in the world.",
        img: `${sazek}`,
        background: "https://media-cdn.tripadvisor.com/media/photo-c/2560x500/10/e2/f8/43/longest-sea-beach-in.jpg"
    },
    {
        id: 1,
        name: "Sreemangal",
        details: "Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress. Its natural scenery is very charming. It soothes one’s eyes. Birds are twittering always here. The first tea garden in Bangladesh which names “Malni chho ra tea garden” is here. Only one tea research institute in Bangladesh which name is BTRI (Bangladesh Tea Research Institute) is situated in Sreemangal. The terraced tea gardens, plantations and evergreen hills of sreemangal are wonderful treats for the tourists. ",
        img: `${Sreemangal}`,
        background:"https://cdn.hipwallpaper.com/i/70/19/fivA54.jpg"
    },
    {
        id: 2,
        name: "Sundarban",
        details: "The Sundarbans mangrove forest, one of the largest such forests in the world (140,000 ha), lies on the delta of the Ganges, Brahmaputra and Meghna rivers on the Bay of Bengal. It is adjacent to the border of India's Sundarbans World Heritage site inscribed in 1987.",
        img: `${sundarban}`,
        background: `${sundorbon_bg}`
    }
] 

export default FakeData;