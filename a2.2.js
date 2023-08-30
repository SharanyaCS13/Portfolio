var templeData =[
  {
    "ID": 1,
    "Image": "AMAR NATH (Kashmir).jpg",
    "Title": "AMAR NATH (Kashmir)",
    "Description": "अमर नाथ (कश्मीर)"
  },
  {
    "ID": 2,
    "Image": "SANKRACHARYA TEMPLE (Srinagar).jpg",
    "Title": "SANKRACHARYA TEMPLE (Srinagar)",
    "Description": "शंकराचार्य मंदिर (श्रीनगर)"
  },
  {
    "ID": 3,
    "Image": "BADRI NATH TEMPLE.jpg",
    "Title": "BADRI NATH TEMPLE",
    "Description": "बद्री नाथ मंदिर"
  },
  {
    "ID": 4,
    "Image": "KEDAR NATH TEMPLE.jpg",
    "Title": "KEDAR NATH TEMPLE",
    "Description": "केदार नाथ मंदिर"
  },
  {
    "ID": 5,
    "Image": "\VAISHNO DEVI (Jammu).jpg",
    "Title": "VAISHNO DEVI (Jammu)",
    "Description": "वैष्णो देवी (जम्मू)"
  },
  {
    "ID": 6,
    "Image": "RAGHUNATH TEMPLE (Jammu).jpg",
    "Title": "RAGHUNATH TEMPLE (Jammu)",
    "Description": "रघुनाथ मंदिर (जम्मू)"
  },
  {
    "ID": 7,
    "Image": "CHAMUNDI TEMPLE (Chamundi).jpg",
    "Title": "CHAMUNDI TEMPLE (Chamundi)",
    "Description": "चामुंडी मंदिर (चामुंडी)"
  },
  {
    "ID": 8,
    "Image": "GOLDEN TEMPLE (Amristar).jpg",
    "Title": "GOLDEN TEMPLE (Amristar)",
    "Description": "स्वार्ण मंदिर (अमृतसर)"
  },
  {
    "ID": 9,
    "Image": "LAKSHMI NARAYAN TEMPLE (Kurukeshtra).jpg",
    "Title": "LAKSHMI NARAYAN TEMPLE (Kurukeshtra)",
    "Description": "लक्ष्मी नारायण मंदिर (कुरुकेष्ट्रा)"
  },
  {
    "ID": 10,
    "Image": "LAKSHMI NARAYAN TEMPLE (BIRLA TEMPLE) (New Delhi).jpg",
    "Title": "LAKSHMI NARAYAN TEMPLE (BIRLA TEMPLE) (New Delhi)",
    "Description": "लक्ष्मी नारायण मंदिर (बिड़ला मंदिर) (नई दिल्ली)"
  },
  {
    "ID": 11,
    "Image": "BAHAI TEMPLE (LOTUS TEMPLE) (New Delhi).jpg",
    "Title": "BAHAI TEMPLE (LOTUS TEMPLE) (New Delhi)",
    "Description": "बहाई मंदिर (लोटस टेम्पल) (नई दिल्ली)"
  },
  {
    "ID": 12,
    "Image": "SISGANJ (Delhi).jpg",
    "Title": "SISGANJ (Delhi)",
    "Description": "बएसआईएसगंज (दिल्ली)"
  },
  {
    "ID": 13,
    "Image": "HAR KI PAURI (Hardwar).jpg",
    "Title": "HAR KI PAURI (Hardwar)",
    "Description": "हर की पौड़ी (हरिद्वार)"
  },
  {
    "ID": 14,
    "Image": "VISHRAM GHAT (Mathura).jpg",
    "Title": "VISHRAM GHAT (Mathura)",
    "Description": "विश्राम घाट (मथुरा)"
  },
  {
    "ID": 15,
    "Image": "BUDDHA TEMPLE (Gaya).jpg",
    "Title": "BUDDHA TEMPLE (Gaya)",
    "Description": "बुद्ध मंदिर (गया)"
  },
  {
    "ID": 16,
    "Image": "MANIKARNIKA GHAT (Varanasi).jpg",
    "Title": "MANIKARNIKA GHAT (Varanasi)",
    "Description": "मणिकर्णिका घाट (वाराणसी)"
  },
  {
    "ID": 17,
    "Image": "BUDDHA TEMPLE (Saranath).jpg",
    "Title": "BUDDHA TEMPLE (Saranath)",
    "Description": "बुद्ध मंदिर (सारनाथ)"
  },
  {
    "ID": 18,
    "Image": "KANDARYA MAHADEO TEMPLE(Khajuraho).jpg",
    "Title": "KANDARYA MAHADEO TEMPLE(Khajuraho)",
    "Description": "कंडरिया महादेव मंदिर (खजुराहो)"
  },
  {
    "ID": 19,
    "Image": "JAGANNATH TEMPLE (Puri).jpg",
    "Title": "JAGANNATH TEMPLE (Puri)",
    "Description": "जगन्नाथ मंदिर (पुरी)"
  },
  {
    "ID": 20,
    "Image": "BELUR MATH (Calcutta).jpg",
    "Title": "BELUR MATH (Calcutta)",
    "Description": "बेलूर मठ (कलकत्ता)"
  },
  {
    "ID": 21,
    "Image": "SOMNATH TEMPLE (Gujarat).jpg",
    "Title": "SOMNATH TEMPLE (Gujarat)",
    "Description": "सोमनाथ मंदिर (गुजरात)"
  },
  {
    "ID": 22,
    "Image": "KUNDAL TEMPLE (Madurai).jpg",
    "Title": "KUNDAL TEMPLE (Madurai)",
    "Description": "कुंडल मंदिर (मदुरै)"
  },
  {
    "ID": 23,
    "Image": "MEENAKSHI TEMPLE (Madurai).jpg",
    "Title": "MEENAKSHI TEMPLE (Madurai)",
    "Description": "मीनाक्षी मंदिर (मदुरै)"
  },
  {
    "ID": 24,
    "Image": "SWAMI VIVEKANANDA MEMORIAL (Kanyakumari).jpg",
    "Title": "SWAMI VIVEKANANDA MEMORIAL (Kanyakumari)",
    "Description": "स्वामी विवेकानंद स्मारक (कन्याकुमारी)"
  }
]


var container = document.querySelector(".container-grid");

templeData.forEach(function(temple) {
  var section = document.createElement("div");
  section.className = "section";

  var image = document.createElement("img");
  image.src = temple.Image; // Use the correct property name: Image

  var name = document.createElement("p");
  name.textContent = temple.Title; // Use the correct property name: Title

  var location = document.createElement("p");
  location.textContent = temple.Description; // Use the correct property name: Description

  section.appendChild(image);
  section.appendChild(name);
  section.appendChild(location);

  container.appendChild(section);
});
