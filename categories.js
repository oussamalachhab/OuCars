const cars = {
    sedan: [
      { name: 'Acura TLX 2024', price: "48,000$" , image: 'img/Sedan/Acura-TLX-2024-1280-02.jpg' },
      { name: 'Audi A4 2020', price: "40,000$ - 50,000$", image: 'img/Sedan/Audi-A4-2020-1280-01.jpg' },
      { name: 'BMW 3 Series 2023', price: "41,000$ - 56,000$", image: 'img/Sedan/BMW-3-Series_ZA-Version-2023-1280-0b.jpg' },
      { name: 'Cadillac CT5 2025', price: "37,000$ - 47,000$", image: 'img/Sedan/Cadillac-CT5-2025-1280-01.jpg' },
      { name: 'Chevrolet Malibu 2019', price: "23,000$ - 34,000$", image: 'img/Sedan/Chevrolet-Malibu-2019-1280-02.jpg' },
      { name: 'Chrysler 300C 2023', price: "48,000$", image: 'img/Sedan/Chrysler-300C-2023-1280-01.jpg' },
      { name: 'Ford Fusion 2019', price: "24,000$ - 37,000$", image: 'img/Sedan/Ford-Fusion-2019-1280-01.jpg' },
      { name: 'Genesis G80 2022', price: "48,000$ - 60,000$", image: 'img/Sedan/Genesis-G80_US-Version-2022-1280-01.jpg' },
      { name: 'Honda Accord 2023', price: "25,000$ - 37,000$", image: 'img/Sedan/Honda-Accord-2023-1280-01.jpg' },
      { name: 'Hyundai Sonata 2020', price: "23,000$ - 34,000$", image: 'img/Sedan/Hyundai-Sonata-2020-1280-09.jpg' },
      { name: 'Kia Optima 2019', price: "24,000$ - 35,000$", image: 'img/Sedan/Kia-Optima_US-Version-2019-1280-04.jpg' },
      { name: 'Lexus ES 2024', price: "40,000$ - 45,000$", image: 'img/Sedan/Lexus-ES-2024-1280-03.jpg' },
      { name: 'Lincoln Continental 2019', price: "85 000$", image: 'img/Sedan/Lincoln-Continental_80th_Anniversary-2019-1280-03.jpg' },
      { name: 'Mazda 6 2018', price: "24,000$ - 36,000$", image: 'img/Sedan/Mazda-6-2018-1280-08.jpg' },
      { name: 'Mercedes-Benz C Class 2022', price: "41,000$ - 47,000$", image: 'img/Sedan/Mercedes-Benz-C-Class_US-Version-2022-1280-04.jpg' },
      { name: 'Nissan Altima 2023', price: "25,000$ - 35,000$", image: 'img/Sedan/Nissan-Altima-2023-1280-02.jpg' },
      { name: 'Subaru Legacy 2023', price: "23,000$ - 36,000$", image: 'img/Sedan/Subaru-Legacy-2023-1280-02.jpg' },
      { name: 'Toyota Camry 2021', price: "25,000$ - 35,000$", image: 'img/Sedan/Toyota-Camry-2021-1280-06.jpg' },
      { name: 'Volkswagen Jetta 2022', price: "19,000$ - 30,000$", image: 'img/Sedan/Volkswagen-Jetta-2022-1280-06.jpg' },
      { name: 'Volvo S60 2019', price: "38,000$ - 50,000$", image: 'img/Sedan/Volvo-S60_UK-Version-2019-1280-07.jpg' }
    ],
    suv: [
      { name: 'Audi Q7 2020', price: "54,000$ - 71,000$", image: 'img/SUV/Audi-Q7-2020-1280-07.jpg' },
      { name: 'Audi SQ5 2021', price: "52,900$ - 62,900$", image: 'img/SUV/Audi-SQ5_US-Version-2021-1280-02.jpg' },
      { name: 'Bentley Bentayga 2021', price: "177,000$ - 245,000$", image: 'img/SUV/Bentley-Bentayga-2021-1280-04.jpg' },
      { name: 'BMW X5 2024', price:"70,000$ - 96,300$" , image: 'img/SUV/BMW-X5-2024-1280-01.jpg' },
      { name: 'BMW X7_M60i 2023', price: "82,000$ - 100,000$", image: 'img/SUV/BMW-X7_M60i_US-Version-2023-1280-01.jpg' },
      { name: 'Brabus 700_Widestar 2019', price: "174,943$ - 275,549$", image: 'img/SUV/Brabus-700_Widestar-2019-1280-08.jpg' },
      { name: 'Cadillac Escalade 2021', price: "76,000$ - 100,000$", image: 'img/SUV/Cadillac-Escalade-2021-1280-01.jpg' },
      { name: 'Chevrolet Tahoe 2021', price: "50,000$ - 70,000$", image: 'img/SUV/Chevrolet-Tahoe-2021-1280-07.jpg' },
      { name: 'Ford Explorer 2020', price: "32,000$ - 58,000$", image: 'img/SUV/Ford-Explorer-2020-1280-06.jpg' },
      { name: 'Honda CR-V 2023', price: "50,000$ - 55,000$", image: 'img/SUV/Honda-CR-V-2023-1280-05.jpg' },
      { name: 'Hyundai Tucson 2024', price: "32,800$ - 42,200$", image: 'img/SUV/Hyundai-Tucson-2024-1280-02.jpg' },
      { name: 'Jeep Grand_Cherokee 2022', price: "34,000$ - 87,000$", image: 'img/SUV/Jeep-Grand_Cherokee-2022-1280-02.jpg' },
      { name: 'Kia Sorento 2024', price: "43,250$ - 55,350$", image: 'img/SUV/Kia-Sorento-2024-1280-05.jpg' },
      { name: 'Land_Rover Range_Rover_Sport_SV 2024', price: "115,690$ - 160,700$", image: 'img/SUV/Land_Rover-Range_Rover_Sport_SV-2024-1280-01.jpg' },
      { name: 'Lexus RX 2023', price: "45,000$ - 60,000$", image: 'img/SUV/Lexus-RX_US-Version-2023-1280-02.jpg' },
      { name: 'Mercedes-Benz GLC_Coupe 2024', price: "50,000$ - 70,000$", image: 'img/SUV/Mercedes-Benz-GLC_Coupe_UK-Version-2024-1280-02.jpg' },
      { name: 'Porsche Cayenne_Turbo_GT 2024', price: "126,000$ - 246,000$", image: 'img/SUV/Porsche-Cayenne_Turbo_GT-2024-1280-03.jpg' },
      { name: 'Subaru Forester_Wilderness 2022', price: "38,183$ - 42,583$", image: 'img/SUV/Subaru-Forester_Wilderness-2022-1280-02.jpg' },
      { name: 'Toyota Highlander 2020', price: "35,000$ - 50,000$", image: 'img/SUV/Toyota-Highlander-2020-1280-02.jpg' },
      { name: 'Volkswagen Tiguan 2024', price: "25,000$ - 40,000$", image: 'img/SUV/Volkswagen-Tiguan-2024-1280-05.jpg' },
    ],
    hatchback: [
      { name: ' volkswagen golf GTI 2024', price: "38,000$ - 42,500$", image: 'img/Hatchback/Volkswagen-Golf_GTI_380-2024-1280-01.jpg' },
      { name: 'Ford Focus ST 2022', price: "23,000$ - 32,600$", image: 'img/Hatchback/Ford-Focus_ST_Edition-2022-1280-09.jpg' },
      { name: 'Audi A3 2021', price: "32,700$ - 48,400$", image: 'img/Hatchback/Audi-A3_Sportback_45_TFSI_e-2021-1280-01.jpg' },
      { name: 'Bmw serie 1 pack M', price: "39,500$ - 41,400$", image: 'img/Hatchback/BMW-1-Series_M_Performance_Parts-2020-1280-01.jpg' },
      { name: 'chevrolet Cruze 2017', price: "15,000$ - 85,000$", image: 'img/Hatchback/Chevrolet-Cruze_Hatchback-2017-1280-01.jpg' },
      { name: 'Fiat 500 abarth', price: "24,200$ - 27,150$", image: 'img/Hatchback/Fiat-500e_Abarth-2023-1280-07.jpg' },
      { name: 'honda civic 2020', price: "29,294$ - 34,294$", image: 'img/Hatchback/Honda-Civic_Hatchback-2020-1280-01.jpg' },
      { name: 'hyndai i30 2021', price: "25,000$ - 27,400$", image: 'img/Hatchback/Hyundai-i30_N-2021-1280-01.jpg' },
      { name: 'kia Rio 2021', price: "14,900$ - 17,990$", image: 'img/Hatchback/Kia-Rio-2021-1280-01.jpg' },
      { name: 'Mazda 3 2019', price: "26,245$", image: 'img/Hatchback/Mazda-3-2019-1280-0c.jpg' },
      { name: 'Mercedes-Benz A Class 2023', price: "39,300$ - 46,800$", image: 'img/Hatchback/Mercedes-Benz-A-Class-2023-1280-03.jpg' },
      { name: 'Mini Cooper SE 2024', price: "26,245$", image: 'img/Hatchback/Mini-Cooper_SE-2024-1280-10.jpg' },
      { name: 'Nissan Micra 2021', price: "17,500 - 18,500$", image: 'img/Hatchback/Nissan-Micra-2021-1280-01.jpg' },
      { name: 'Peugeot E208 2024', price: "14,300$ - 19,100$", image: 'img/Hatchback/Peugeot-e-208-2024-1280-01.jpg' },
      { name: 'Renault Clio 2024', price: "14,800$ - 21,400$", image: 'img/Hatchback/Renault-Clio_UK-Version-2024-1280-01.jpg' },
      { name: 'Seat Ibiza 2022', price: "20,400$ - 24,690$", image: 'img/Hatchback/Seat-Ibiza-2022-1280-0c.jpg' },
      { name: 'Skoda fabia RS', price: "11,900$ - 17,100$", image: 'img/Hatchback/Skoda-Fabia_RS_Rally2-2023-1280-07.jpg' },
      { name: 'Suzuki Swift 2024', price: "18,200$", image: 'img/Hatchback/Suzuki-Swift-2024-1280-03.jpg' },
      { name: 'Toyota Crolla 2023', price: "27,300$ - 32,300$", image: 'img/Hatchback/Toyota-Corolla_Hatchback_EU-Version-2023-1280-02.jpg' },
      { name: 'Volvo V40 2017', price: "27,900$ - 39,000$", image: 'img/Hatchback/Volvo-V40-2017-1280-03.jpg' },
    ],
    Crossover: [
        { name: 'Acura RDX 2022', price: "33,447$ - 45,000$", image: 'img/Crossover/Acura-RDX-2022-1280-03.jpg' },
        { name: 'Audi SQ5 2021', price: "52,900$ - 62,900$", image: 'img/SUV/Audi-SQ5_US-Version-2021-1280-02.jpg' },
        { name: 'BMW X3 2022', price: "47,050$ - 56,800$", image: 'img/Crossover/BMW-X3-2022-pics-2.jpg' },
        { name: 'Chevrolet Equinox 2021', price:"25,000$ - 35,000$" , image: 'img/Crossover/Chevrolet-Equinox-2021-1280-01.jpg' },
        { name: 'Ford Escape 2023', price: "25,000$ - 35,000$", image: 'img/Crossover/Ford-Escape-2023-1280-01.jpg' },
        { name: 'GMC Terrain AT4 2022', price: "35,000$ - 40,000$", image: 'img/Crossover/GMC-Terrain_AT4-2022-1280-01.jpg' },
        { name: 'Infiniti QX50 2021', price: "37,000$ - 45,000$", image: 'img/Crossover/Infiniti-QX50-2021-1280-01.jpg' },
        { name: 'Kia Sportage 2022', price: "32,490$ - 43,150$", image: 'img/Crossover/Kia-Sportage-2022-1280-01.jpg' },
        { name: 'Range Rover Evoque 2024', price: "53,130$ - 63,530$", image: 'img/Crossover/Land_Rover-Range_Rover_Evoque-2024-1280-01.jpg' },
        { name: 'Honda CR-V 2023', price: "50,000$ - 55,000$", image: 'img/SUV/Honda-CR-V-2023-1280-05.jpg' },
        { name: 'Hyundai Tucson 2024', price: "32,800$ - 42,200$", image: 'img/SUV/Hyundai-Tucson-2024-1280-02.jpg' },
        { name: 'Jeep Grand_Cherokee 2022', price: "34,000$ - 87,000$", image: 'img/SUV/Jeep-Grand_Cherokee-2022-1280-02.jpg' },
        { name: 'Lexus NX 2022', price: "56,900$ - 90,000$", image: 'img/Crossover/Lexus-NX-2022-1280-07.jpg' },
        { name: 'Mazda CX5 2021', price: "31,000$ - 37,900$", image: 'img/Crossover/Mazda-CX-5-2021-1280-01.jpg' },
        { name: 'Mercedes-Benz GLC 2023', price: "53,500$ - 79,000$", image: 'img/Crossover/Mercedes-Benz-GLC-2023-1280-01.jpg' },
        { name: 'Nissan Rogue 2021', price: "25,000$ - 30,000$", image: 'img/Crossover/Nissan-Rogue-2021-1280-04.jpg' },
        { name: 'Toyota RAV4 2019', price: "37,380$ - 46,680$", image: 'img/Crossover/Toyota-RAV4-2019-1280-03.jpg' },
        { name: 'Subaru Forester_Wilderness 2022', price: "38,183$ - 42,583$", image: 'img/SUV/Subaru-Forester_Wilderness-2022-1280-02.jpg' },
        { name: 'Volvo XC60 2022', price: "56,000$ - 62,000$", image: 'img/Crossover/Volvo-XC60-2022-1280-01.jpg' },
        { name: 'Volkswagen Tiguan 2024', price: "25,000$ - 40,000$", image: 'img/SUV/Volkswagen-Tiguan-2024-1280-05.jpg' },
    ],
    Coupe: [
        { name: 'Aston-Martin Vantage 2019', price: "153,277$ - 188,773$", image: 'img/Coupe/Aston_Martin-Vantage-2019-1280-0e.jpg' },
        { name: 'Audi A5 Coupe 2020', price: "69,900$", image: 'img/Coupe/Audi-A5_Coupe-2020-1280-07.jpg' },
        { name: 'Bently Contimental GT-S 2023', price: "288,000$", image: 'img/Coupe/Bentley-Continental_GT_S-2023-1280-03.jpg' },
        { name: 'BMW 4 Series Coupe 2021', price:"53,500$ - 66,600$" , image: 'img/Coupe/BMW-4-Series_Coupe-2021-1280-04.jpg' },
        { name: 'Chevrolet Camaro 2019', price: "28,000$ - 38,000$", image: 'img/Coupe/Chevrolet-Camaro-2019-1280-01.jpg' },
        { name: 'Dodge Challenger 2019', price: "17,500$", image: 'img/Coupe/Dodge-Challenger-2019-1280-02.jpg' },
        { name: 'Ferrari 488 GTB 2016', price: "301,000$", image: 'img/Coupe/Ferrari-488_GTB-2016-1280-01.jpg' },
        { name: 'Ford Mustang shelby GT500 2022', price: "66,700$ - 74,700$", image: 'img/Coupe/Ford-Mustang_Shelby_GT500-2022-1280-03.jpg' },
        { name: 'Honda Civic Coupe 2019', price: "30,000$ - 35,000$", image: 'img/Coupe/Honda-Civic_Coupe-2019-1280-0f.jpg' },
        { name: 'Hyundai Genesis Coupe 2013', price: "15,700$ - 21,990$", image: 'img/Coupe/Hyundai-Genesis_Coupe-2013-1280-09.jpg' },
        { name: 'Jaguar F-type 2021', price: "80,070$ - 90,750$", image: 'img/Coupe/Jaguar-F-Type-2021-1280-12.jpg' },
        { name: 'Lamborghini Hurcan Tecnica 2013', price: "250,000$ - 400,000$", image: 'img/Coupe/Lamborghini-Huracan_Tecnica-2023-1280-17.jpg' },
        { name: 'Lexus RC 2019', price: "53,950$ - 87,550$", image: 'img/Coupe/Lexus-RC-2019-1280-01.jpg' },
        { name: 'Maserati GranTurismo 2023', price: "222,500$ - 350,000$", image: 'img/Coupe/Maserati-GranTurismo-2023-1280-02.jpg' },
        { name: 'McLaren 570S Coupe 2016', price: "229,000$ - 247,500$", image: 'img/Coupe/McLaren-570S_Coupe-2016-1280-0d.jpg' },
        { name: 'Mercedes-Benz GLC Coupe 2024', price: "50,000$ - 70,000$", image: 'img/SUV/Mercedes-Benz-GLC_Coupe_UK-Version-2024-1280-02.jpg' },
        { name: 'Mercedes-Benz C class Coupe 2019', price: "46,100$ - 92,200$", image: 'img/Coupe/Mercedes-Benz-C-Class_Coupe-2019-1280-04.jpg' },
        { name: 'Nissan 370Z 2013', price: "40,978$  48,978$", image: 'img/Coupe/Nissan-370Z-2013-1280-02.jpg' },
        { name: 'Porsche 911 S 2024', price: "121,200$ - 303,000$", image: 'img/Coupe/Porsche-911_S-T-2024-1280-16.jpg' },
        { name: 'Toyota Supra 2021', price: "56,390$ - 67,690$", image: 'img/Coupe/Toyota-Supra_US-Version-2021-1280-01.jpg' }
    ],
    Convertible: [
        { name: 'Aston-Martin DB11 Volante 2019', price: "248,975$", image: 'img/Convertible/Aston_Martin-DB11_Volante-2019-1280-09.jpg' },
        { name: 'Audi A5 Cabriolet 2020', price: "50,900$ - 84,350$", image: 'img/Convertible/Audi-A5_Cabriolet-2020-1280-01.jpg' },
        { name: 'Bently Contimental GT 2022', price: "263,600$ - 365,900$", image: 'img/Convertible/Bentley-Continental_GT_Speed_Convertible-2022-1280-0b.jpg' },
        { name: 'BMW 4 Series 2021', price:"53,650$ - 89,100$" , image: 'img/Convertible/BMW-4-Series_Convertible-2021-1280-0b.jpg' },
        { name: 'BNW Z4 2023', price: "67,000$ - 80,500$", image: 'img/Convertible/BMW-Z4-2023-1280-05.jpg' },
        { name: 'Chevrolet Corvette 2021', price: "69,398$ - 93,898$", image: 'img/Convertible/Chevrolet-Corvette_Stingray_Convertible_EU-Version-2021-1280-03.jpg' },
        { name: 'Ferrari Portofino M 2021', price: "275,000$", image: 'img/Convertible/Ferrari-Portofino_M-2021-1280-01.jpg' },
        { name: 'Fiat 124 spider S 2018', price: "33,495$ - 37,995$", image: 'img/Convertible/Fiat-124_Spider_S-Design-2018-1280-03.jpg' },
        { name: 'Ford Mustang GT 2018', price: "28,988$ - 74,388$", image: 'img/Convertible/Ford-Mustang_GT_Convertible-2018-1280-01.jpg' },
        { name: 'Jaguar F-type 2021', price: "73,000$ - 121,500$", image: 'img/Convertible/Jaguar-F-Type_Convertible-2021-1280-01.jpg' },
        { name: 'Lamborghini Huracan Evo', price: "270,000$ - 379,995$", image: 'img/Convertible/Lamborghini-Huracan_Evo_RWD_Spyder-2021-1280-11.jpg' },
        { name: 'Lexus Lc 2021', price: "103,550$ - 122,500$", image: 'img/Convertible/Lexus-LC_Convertible_UK-Version-2021-1280-02.jpg' },
        { name: 'Mazda MX-5 Miata 2011', price: "28,995$ - 41,195$", image: 'img/Convertible/Mazda-MX-5_Miata_Special_Edition-2011-1280-01.jpg' },
        { name: 'Mercedes-Benz E class 2021', price: "64,900$ - 127,900$", image: 'img/Convertible/Mercedes-Benz-E-Class_Cabriolet-2021-1280-04.jpg' },
        { name: 'Mercedes-Benz SL class 2012', price: "126,000$ - 152,600$", image: 'img/Convertible/Mercedes-Benz-SL-Class-2013-1280-0e.jpg' },
        { name: 'Mini Cooper S 2023', price: "40,990$", image: 'img/Convertible/Mini-Cooper_S_Convertible_Seaside_Edition-2023-1280-0e.jpg' },
        { name: 'Porsche 911 Carrera GTS Cabriolet 2023', price: "121,200$ - 303,000$", image: 'img/Convertible/Porsche-911_Carrera_GTS_Cabriolet_America-2023-1280-01.jpg' },
        { name: 'Porsche Boxster 2021', price: "67,100$ - 119,600$", image: 'img/Convertible/Porsche-Boxster_25_Years_Edition-2021-1280-0e.jpg' },
        { name: 'Rolls-Royce Dawn Silver Bullet 2020', price: "516,895$ - 527,015$", image: 'img/Convertible/Rolls-Royce-Dawn_Silver_Bullet-2020-1280-02.jpg' },
        { name: 'Volkswagen Beetle 2013', price: "22,175$ - 34,250$", image: 'img/Convertible/Volkswagen-Beetle_Convertible-2013-1280-03.jpg' },
    ],
    Wagon: [
        { name: 'Audi A4 allroad Quattro 2020', price: "46,200$ - 63,800$", image: 'img/Wagon/Audi-A4_allroad_quattro-2020-1280-01.jpg' },
        { name: 'BMW 3 Series touring 2023', price: "54,900$ - 115,600$", image: 'img/Wagon/BMW-3-Series_Touring-2023-1280-01.jpg' },
        { name: 'BMW 5 Series Touring 2021', price: "63,500$ - 122,000$", image: 'img/Wagon/BMW-5-Series_Touring-2021-1280-07.jpg' },
        { name: 'Brabus Mercedes-Benz C class Wagon 2004', price:"35,800$ - 63,500$" , image: 'img/Wagon/Brabus-Mercedes-Benz_C-Class_Wagon-2004-1280-01.jpg' },
        { name: 'Buick Regal TourX 2018', price: "31,845$ - 43,845$", image: 'img/Wagon/Buick-Regal_TourX-2018-1280-05.jpg' },
        { name: 'Cadillac CTS V-Sport Wagon 2011', price: "37,015$ - 74,820$", image: 'img/Wagon/Cadillac-CTS-V_Sport_Wagon-2011-1280-04.jpg' },
        { name: 'Ford Focus Active Wagon 2022', price: "17,678$ - 58,988$", image: 'img/Wagon/Ford-Focus_Active_Wagon-2022-1280-04.jpg' },
        { name: 'Jaguar XF-Sportbrake 2021', price: "60,570$", image: 'img/Wagon/Jaguar-XF_Sportbrake-2021-1280-01.jpg' },
        { name: 'Kia Optima Sprtswagon 2019', price: "24,795$ - 39,395$", image: 'img/Wagon/Kia-Optima_Sportswagon_EU-Version-2019-1280-01.jpg' },
        { name: 'Peugeot 308 SW 2022', price: "29,790$ - 34,990$", image: 'img/Wagon/Peugeot-308_SW-2022-1280-11.jpg' },
        { name: 'Peugeot 508 SW 2023', price: "41,790$", image: 'img/Wagon/Peugeot-508_SW-2023-1280-02.jpg' },
        { name: 'Subaru Legacy Wagon JDM 2010', price: "28,995$ - 40,795$", image: 'img/Wagon/Subaru-Legacy_Wagon_JDM-2010-1280-01.jpg' },
        { name: 'Toyota Corolla Touring Sports 2023', price: "22,690$ - 59,990$", image: 'img/Wagon/Toyota-Corolla_Touring_Sports-2023-1280-01.jpg' },
        { name: 'Volkswagen Golf SportWagon 2015', price: "15,300$ - 16,700$", image: 'img/Wagon/Volkswagen-Golf_SportWagen-2015-1280-01.jpg' },
        { name: 'Volkswagen Passat Alltrack 2020', price: "27,145$ - 36,495$", image: 'img/Wagon/Volkswagen-Passat_Alltrack-2020-1280-09.jpg' },
        { name: 'Volvo V60 2019', price: "43,900$ - 55,400$", image: 'img/Wagon/Volvo-V60-2019-1280-01.jpg' },
        { name: 'Volvo V90 2020', price: "62-500$ - 65,950$", image: 'img/Wagon/Volvo-V90-2020-1280-04.jpg' },
        { name: 'Volvo XC70 2014', price: "43,450$ - 52,350$", image: 'img/Wagon/Volvo-XC70-2014-1280-01.jpg' },
        { name: 'Mercedes-Benz E Class Wagon 2021', price: "64,900$ - 127,900$", image: 'img/Wagon/Wald-Mercedes-Benz_E-Class_Wagon-2001-1280-01.jpg' },
        { name: 'Renault Megane Estate 2017', price: "21,000 - 28,000$", image: 'img/Wagon/Renault-Megane_Estate-2017-1280-01.jpg' },
    ],
    PickupTruck: [
        { name: 'chevrolet Colorado 2023', price: "34,303$ - 56,003$", image: 'img/PickupTruck/Chevrolet-Colorado-2023-1280-01.jpg' },
        { name: 'Chevrolet Silverado-HD 2024', price: "54,203$ - 99,098$", image: 'img/PickupTruck/Chevrolet-Silverado_HD-2024-1280-01.jpg' },
        { name: 'Chevrolet Silverado 2022', price: "45,303$ - 87,503$", image: 'img/PickupTruck/Chevrolet-Silverado-2022-1280-04.jpg' },
        { name: 'Dodge Dakota 2008', price:"25,695$ - 36,895$" , image: 'img/PickupTruck/Dodge-Dakota-2008-1280-01.jpg' },
        { name: 'Ford F-150 2024', price: "69,000$ - 115,000$", image: 'img/PickupTruck/Ford-F-150-2024-1280-01.jpg' },
        { name: 'Ford F Super-Duty 2023', price: "58,479$ - 120,115$", image: 'img/PickupTruck/Ford-F-Series_Super_Duty-2023-1280-01.jpg' },
        { name: 'Ford Ranger 2023', price: "41,255$ - 77,805$", image: 'img/PickupTruck/Ford-Ranger-2023-1280-02.jpg' },
        { name: 'GMC Canyon 2023', price: "45,603$ - 72,500$", image: 'img/PickupTruck/GMC-Canyon-2023-1280-07.jpg' },
        { name: 'GMC Sierra 2022', price: "56,003$ - 101,798$", image: 'img/PickupTruck/GMC-Sierra-2022-1280-02.jpg' },
        { name: 'Honda Ridgeline 2021', price: "44,355$ - 53,055$", image: 'img/PickupTruck/Honda-Ridgeline-2021-1280-09.jpg' },
        { name: 'Isuzu D-Max 2017', price: "15,749$ - 26,999$", image: 'img/PickupTruck/Isuzu-D-Max-2017-1280-11.jpg' },
        { name: 'Jeep Gladiator 2024', price: "52,795$ - 76,785$", image: 'img/PickupTruck/Jeep-Gladiator-2024-1280-02.jpg' },
        { name: 'Mitsubishi L200 2024', price: "22,500$ - 38,000$", image: 'img/PickupTruck/Mitsubishi-L200-2024-1280-05.jpg' },
        { name: 'Nissan Frontier 2022', price: "40,498$ - 48,498$", image: 'img/PickupTruck/Nissan-Frontier-2022-1280-03.jpg' },
        { name: 'Nissan Titan 2020', price: "50,498$ - 74,898$", image: 'img/PickupTruck/Nissan-Titan-2020-1280-0b.jpg' },
        { name: 'RAM 1500 2019', price: "43,345$ - 75,845$", image: 'img/PickupTruck/Ram-1500-2019-1280-04.jpg' },
        { name: 'Toyota Hilux 2021', price: "27,290$", image: 'img/PickupTruck/Toyota-Hilux-2021-1280-06.jpg' },
        { name: 'Toyota Tacoma 2024', price: "41,350$ - 61,070$", image: 'img/PickupTruck/Toyota-Tacoma-2024-1280-03.jpg' },
        { name: 'Toyota Tundra 2022', price: "44,990$ - 84,150$", image: 'img/PickupTruck/Toyota-Tundra-2022-1280-03.jpg' },
        { name: 'Volkswagen Amarok 2023', price: "33,000$", image: 'img/PickupTruck/Volkswagen-Amarok_UK-Version-2023-1280-07.jpg' },
    ],
    Sports: [
        { name: 'Alfa-Romeo 4C-Spider 2015', price: "64,495$ - 78,495$", image: 'img/Sports/Alfa_Romeo-4C_Spider-2015-1280-01.jpg' },
        { name: 'Aston-Martin V12-Vantage 2024', price: "170,500$ - 215,000$", image: 'img/Sports/Aston_Martin-V12_Vantage-2023-1280-01.jpg' },
        { name: 'Audi R8-Coupe V10 GT 2023', price: "179,000$ - 302,600$", image: 'img/Sports/Audi-R8_Coupe_V10_GT_RWD_UK-Version-2023-1280-04.jpg' },
        { name: 'Audi RS5 Sportback Competition-Plus 2023', price:"52,200$ - 70,600$" , image: 'img/Sports/Audi-RS5_Sportback_competition_plus-2023-1280-03.jpg' },
        { name: 'Audi TT-RS Coupe 2023', price: "62,700$ - 72,800$", image: 'img/Sports/Audi-TT_RS_Coupe_Iconic_Edition_UK-Version-2023-1280-01.jpg' },
        { name: 'BMW M2 Competition 2019', price: "38,450$ - 71,750$", image: 'img/Sports/BMW-M2_Competition-2019-1280-02.jpg' },
        { name: 'BMW M4 GT4 2023', price: "196,000$", image: 'img/Sports/BMW-M4_GT4-2023-1280-03.jpg' },
        { name: 'Bugatti Chiron Super Sport 2022', price: "3,987,000$ - 4,715,000$", image: 'img/Sports/Bugatti-Chiron_Super_Sport-2022-1280-06.jpg' },
        { name: 'Chevrolet Camaro ZL1 2018', price: "29,695$ - 76,445$", image: 'img/Sports/Chevrolet-Camaro_ZL1_1LE-2018-1280-02.jpg' },
        { name: 'Lamborghini Huracan STO 2021', price: "270,000$ - 379,995$", image: 'img/Sports/Lamborghini-Huracan_STO-2021-1280-07.jpg' },
        { name: 'Loctus Evora GT 2020', price: "139,900$ - 141,900$", image: 'img/Sports/Lotus-Evora_GT-2020-1280-01.jpg' },
        { name: 'Maserati GranTurismo-Folgore 2023', price: "222,500$ - 350,000$", image: 'img/Sports/Maserati-GranTurismo_Folgore-2023-1280-06.jpg' },
        { name: 'McLaren 720s 2019', price: "350,000$", image: 'img/Sports/McLaren-720S_Track_Pack-2019-1280-02.jpg' },
        { name: 'Mercedes-Benz AMG GT 2023', price: "178,900$ - 199,900$", image: 'img/Sports/Mercedes-Benz-AMG_GT_Track_Series-2023-1280-01.jpg' },
        { name: 'Nissan 370Z 2019', price: "29,998$ - 55,098$", image: 'img/Sports/Nissan-370Z_Heritage_Edition-2019-1280-01.jpg' },
        { name: 'Nissan GT-R 2024', price: "137,498$ - 291,998$", image: 'img/Sports/Nissan-GT-R-2024-1280-03.jpg' },
        { name: 'Porsche 718 Cayman GT4 RS 2022', price: "67,100$ - 166,600$", image: 'img/Sports/Porsche-718_Cayman_GT4_RS_Clubsport-2022-1280-04.jpg' },
        { name: 'Porsche 911 GT3 RS 2023', price: "121,200$ - 303,000$", image: 'img/Sports/Porsche-911_GT3_RS_UK-Version-2023-1280-01.jpg' },
        { name: 'Porsche 911 S 2024', price: "221,200$ - 403,000$", image: 'img/Sports/Porsche-911_S-T-2024-1280-04.jpg' },
        { name: 'Subaru WRX  2019', price: "29,995$ - 47,295$", image: 'img/Sports/Subaru-WRX_STI_S209-2019-1280-02.jpg' },
    ],
    Electric: [
        { name: 'Audi Q8 E-Tron 2024', price: "92,500$ - 110,600$", image: 'img/Electric/Audi-Q8_e-tron_quattro-2024-1280-05.jpg' },
        { name: 'BMW I3 2018', price: "44,750$ - 52,950$", image: 'img/Electric/BMW-i3-2018-1280-01.jpg' },
        { name: 'BMW I4 2022', price: "54,990$ - 72,990$", image: 'img/Electric/BMW-i4-2022-1280-01.jpg' },
        { name: 'Chevrolet Bolt 2022', price: "38,198$" , image: 'img/Electric/Chevrolet-Bolt_EV-2022-1280-01.jpg' },
        { name: 'Ford Mustang 2024', price: "33,160$ - 75,100$", image: 'img/Electric/Ford-Mustang_Mach-E_Rally-2024-1280-06.jpg' },
        { name: 'Hyundai Ioniq Electric 2020', price: "25,399$ - 45,899$", image: 'img/Electric/Hyundai-Ioniq_Electric_US-Version-2020-1280-05.jpg' },
        { name: 'Hyundai Kona Electric 2024', price: "25,999$ - 55,000$", image: 'img/Electric/Hyundai-Kona_Electric-2024-1280-06.jpg' },
        { name: 'Jaguar I-Pace 2019', price: "86,500$ - 103,500$", image: 'img/Electric/Jaguar-I-Pace-2019-1280-01.jpg' },
        { name: 'Kia Soul 2020', price: "21,195$ - 51,595$", image: 'img/Electric/Kia-Soul_EV-2020-1280-01.jpg' },
        { name: 'Mercedes-Benz EQC 2020', price: "68,895$ - 77,615$", image: 'img/Electric/Mercedes-Benz-EQC-2020-1280-01.jpg' },
        { name: 'Mini Cooper SE 2024', price: "40,990$", image: 'img/Electric/Mini-Cooper_SE-2024-1280-09.jpg' },
        { name: 'Nissan Leasf 2023', price: "41,248$ - 49,848$", image: 'img/Electric/Nissan-Leaf_US-Version-2023-1280-01.jpg' },
        { name: 'Porsche Taycan 2021', price: "119,900$ - 218,000$", image: 'img/Electric/Porsche-Taycan-2021-1280-05.jpg' },
        { name: 'Rivian R1T 2022', price: "86,250$ - 117,750$", image: 'img/Electric/Rivian-R1T-2022-1280-01.jpg' },
        { name: 'Tesla Model-3 2018', price: "45,600$ - 64,100$", image: 'img/Electric/Tesla-Model_3-2018-1280-02.jpg' },
        { name: 'Tesla Model-S 2021', price: "113,610$ - 168,610$", image: 'img/Electric/Tesla-Model_S-2021-1280-01.jpg' },
        { name: 'Tesla Model-X 2017', price: "111,950$ - 199,800$", image: 'img/Electric/Tesla-Model_X-2017-1280-02.jpg' },
        { name: 'Tesla Model-Y 2021', price: "68,610$ - 82,610$", image: 'img/Electric/Tesla-Model_Y-2021-1280-01.jpg' },
        { name: 'Volkswagen ID.4 2021', price: "44,995$ - 49,995$", image: 'img/Electric/Volkswagen-ID.4_US-Version-2021-1280-01.jpg' },
        { name: 'Volvo XC40 Recharge 2023', price: "42,250$ - 73,900$", image: 'img/Electric/Volvo-XC40_Recharge-2023-1280-01.jpg' }
    ],
    Hybrid: [
        { name: 'BMW I3 2018', price: "44,750$ - 52,950$", image: 'img/Electric/BMW-i3-2018-1280-01.jpg' },
        { name: 'Chevrolet Volt 2016', price: "38,390$ - 42,490$", image: 'img/Hybrid/Chevrolet-Volt-2016-1280-08.jpg' },
        { name: 'Ford C-Max Hybrid 2013', price: "27,199$ - 36,999$", image: 'img/Hybrid/Ford-C-MAX_Hybrid-2013-1280-01.jpg' },
        { name: 'Ford Escape Hybrid 2008', price: "23,999$ - 34,499$" , image: 'img/Hybrid/Ford-Escape_Hybrid-2008-1280-04.jpg' },
        { name: 'Ford Fusion Hybrid 2013', price: "22,499$ - 41,399$", image: 'img/Hybrid/Ford-Fusion_Hybrid-2013-1280-07.jpg' },
        { name: 'Honda Accord Hybrid 2021', price: "32,570$ - 42,505$", image: 'img/Hybrid/Honda-Accord_Hybrid-2021-1280-01.jpg' },
        { name: 'Honda CR-V Hybrid 2020', price: "28,690$ - 42,590$", image: 'img/Hybrid/Honda-CR-V_Hybrid-2020-1280-05.jpg' },
        { name: 'Honda Insight 2019', price: "28,090$ - 31,690$", image: 'img/Hybrid/Honda-Insight-2019-1280-01.jpg' },
        { name: 'Hyundai Ioniq-5 2024', price: "54,999$ - 62,999$", image: 'img/Hybrid/Hyundai-Ioniq_5_N-2024-1280-01.jpg' },
        { name: 'Hyundai Sonata Hybrid 2020', price: "26,999$ - 40,099$", image: 'img/Hybrid/Hyundai-Sonata_Hybrid-2020-1280-02.jpg' },
        { name: 'Kia Niro Hybrid 2020', price: "26,595$ - 54,495$", image: 'img/Hybrid/Kia-Niro_Hybrid-2020-1280-06.jpg' },
        { name: 'Kia Optima Hybrid 2017', price: "23,995$ - 45,495$", image: 'img/Hybrid/Kia-Optima_Plug-In_Hybrid-2017-1280-04.jpg' },
        { name: 'Lexus ES 2024', price: "40,000$ - 45,000$", image: 'img/Sedan/Lexus-ES-2024-1280-03.jpg' },
        { name: 'Lexus RX 2023', price: "45,000$ - 60,000$", image: 'img/SUV/Lexus-RX_US-Version-2023-1280-02.jpg' },
        { name: 'Porsche Panamera Turbo S Hybrid 2021', price: "99,300$ - 226,500$", image: 'img/Hybrid/Porsche-Panamera_Turbo_S_E-Hybrid-2021-1280-02.jpg' },
        { name: 'Toyota Camry Hybrid 2021', price: "27,250$ - 41,990$", image: 'img/Hybrid/Toyota-Camry_Hybrid_EU-Version-2021-1280-01.jpg' },
        { name: 'Toyota Highlander Hybrid 2011', price: "31,500$ - 51,650$", image: 'img/Hybrid/Toyota-Highlander_Hybrid-2011-1280-01.jpg' },
        { name: 'Toyota Prius 2024', price: "36,650$ - 42,990$", image: 'img/Hybrid/Toyota-Prius-2024-1280-01.jpg' },
        { name: 'Toyota RAV4 Hybrid 2023', price: "32,590$ - 60,180$", image: 'img/Hybrid/Toyota-RAV4_Hybrid_Woodland_Edition-2023-1280-01.jpg' },
        { name: 'Volvo XC90 2020', price: "61,250$ - 85,800$", image: 'img/Hybrid/Volvo-XC90-2020-1280-0a.jpg' }
    ],
    Luxury: [
        { name: 'Aston-Martin DB11 Volante 2019', price: "248,975$", image: 'img/Convertible/Aston_Martin-DB11_Volante-2019-1280-09.jpg' },
        { name: 'Aston-Martin DBS 2021', price: "388,000$ - 410,000$", image: 'img/Luxury/Aston_Martin-DBS_Superleggera_007_Edition-2021-1280-01.jpg' },
        { name: 'Audi R8-Coupe V10 GT 2023', price: "179,000$ - 302,600$", image: 'img/Sports/Audi-R8_Coupe_V10_GT_RWD_UK-Version-2023-1280-04.jpg' },
        { name: 'Audi A6 2019', price: "68,200$ - 75,800$", image: 'img/Luxury/Audi-A6-2019-1280-0f.jpg' },
        { name: 'Audi A8 2022', price: "99,900$ - 144,200$" , image: 'img/Luxury/Audi-A8-2022-1280-05.jpg' },
        { name: 'Bently Continental GT 2018', price: "278,740$ - 285,680$", image: 'img/Luxury/Bentley-Continental_GT-2018-1280-02.jpg' },
        { name: 'Bently Flying 2020', price: "300,000$", image: 'img/Luxury/Bentley-Flying_Spur-2020-1280-01.jpg' },
        { name: 'BMW 5 Series 2021', price: "63,500$ - 122,000$", image: 'img/Luxury/BMW-5-Series-2021-1280-02.jpg' },
        { name: 'BMW 7 Series 2023', price: "147,000$", image: 'img/Luxury/BMW-7-Series-2023-1280-03.jpg' },
        { name: 'Jaguar XF 2021', price: "60,570$", image: 'img/Luxury/Jaguar-XF-2021-1280-01.jpg' },
        { name: 'Jaguar XJ 2016', price: "92,000$ - 124,000$", image: 'img/Luxury/Jaguar-XJ-2016-1280-01.jpg' },
        { name: 'Lexus LS 2021', price: "104,750$ - 133,900$", image: 'img/Luxury/Lexus-LS-2021-1280-01.jpg' },
        { name: 'Maserati Ghibli 2019', price: "85,050$ - 94,250$", image: 'img/Luxury/Maserati-Ghibli-2019-1280-03.jpg' },
        { name: 'Maserati Quattroporte 2019', price: "124,050$ - 155,050$", image: 'img/Luxury/Maserati-Quattroporte-2019-1280-02.jpg' },
        { name: 'Mercedes-Benz S Class Maybach 2021', price: "123,500$  206,900$", image: 'img/Luxury/Mercedes-Benz-S-Class_Maybach-2021-1280-05.jpg' },
        { name: 'Mercedes-Benz E class 2021', price: "64,900$ - 127,900$", image: 'img/Convertible/Mercedes-Benz-E-Class_Cabriolet-2021-1280-04.jpg' },
        { name: 'Porsche Panamera 2024', price: "103,400$ - 234,700$", image: 'img/Luxury/Porsche-Panamera-2024-1280-02.jpg' },
        { name: 'Porsche 911 S 2024', price: "121,200$ - 303,000$", image: 'img/Coupe/Porsche-911_S-T-2024-1280-16.jpg' },
        { name: 'Rolls-Royce Ghost 2021', price: "343,140$ - 400,000$", image: 'img/Luxury/Rolls-Royce-Ghost-2021-1280-02.jpg' },
        { name: 'Rolls-Royce Phantom 2018', price: "500,000$ - 585,000$", image: 'img/Luxury/Rolls-Royce-Phantom-2018-1280-16.jpg' },   
    ],
    Microcar: [
        { name: 'Chevrolet Spark 2019', price: "9,995$ - 19,095$", image: 'img/Microcar/Chevrolet-Spark-2019-1280-01.jpg' },
        { name: 'Citroen C1 2015', price: " NO DISPONIBLE", image: 'img/Microcar/Citroen-C1-2015-1280-05.jpg' },
        { name: 'Dacia Sandero 2021', price: "15,000$ - 17,000$", image: 'img/Microcar/Dacia-Sandero-2021-1280-08.jpg' },
        { name: 'Fiat 500 2021', price: "22,495$ - 32,495$" , image: 'img/Microcar/Fiat-500-2021-1280-1a.jpg' },
        { name: 'Honda Fit 2020', price: "16,390$ - 25,190$", image: 'img/Microcar/Honda-Fit-2020-1280-01.jpg' },
        { name: 'Honda Jazz 2023', price: "23,294$", image: 'img/Microcar/Honda-Jazz-2023-1280-01.jpg' },
        { name: 'Hyundai I10 2024', price: "13,700$ - 16,800$", image: 'img/Microcar/Hyundai-i10-2024-1280-01.jpg' },
        { name: 'Kia Picanto 2021', price: "13,350$ - 15,950$", image: 'img/Microcar/Kia-Picanto-2021-1280-03.jpg' },
        { name: 'Mini Cooper SE 2024', price: "26,245$", image: 'img/Hatchback/Mini-Cooper_SE-2024-1280-10.jpg' },
        { name: 'Mitsubishi Mirage 2020', price: "12,298$ - 19,098$", image: 'img/Microcar/Mitsubishi-Mirage-2020-1280-03.jpg' },
        { name: 'Nissan Micra 2021', price: "10,488$ - 17,598$", image: 'img/Microcar/Nissan-Micra-2021-1280-01.jpg' },
        { name: 'Opel Karl 2017', price: "NO DISPONIBLE", image: 'img/Microcar/Opel-Karl_Rocks-2017-1280-01.jpg' },
        { name: 'Peugeot 108 2015', price: "11,990$", image: 'img/Microcar/Peugeot-108-2015-1280-03.jpg' },
        { name: 'Renault Twingo 2020', price: "No DISPONIBLE", image: 'img/Microcar/Renault-Twingo_ZE-2020-1280-01.jpg' },
        { name: 'Seat Mii Electric 2020', price: "No DISPONIBLE", image: 'img/Microcar/Seat-Mii_Electric_UK-Version-2020-1280-07.jpg' },
        { name: 'Skoda Citigo 2017', price: "6,000$ - 9,000$", image: 'img/Microcar/Skoda-Citigo-2017-1280-01.jpg' },
        { name: 'Smart EQ Fortwo 2020', price: "29,050$ - 32,050$", image: 'img/Microcar/Smart-EQ_fortwo-2020-1280-01.jpg' },
        { name: 'Suzuki Celerio 2015', price: "8,900$ - 11,900$", image: 'img/Microcar/Suzuki-Celerio-2015-1280-05.jpg' },
        { name: 'Toyota Aygo 2019', price: "No DISPONIBLE", image: 'img/Microcar/Toyota-Aygo-2019-1280-06.jpg' },
        { name: 'Volswagen E-Up 2020', price: "No DISPONIBLE", image: 'img/Microcar/Volkswagen-e-Up-2020-1280-03.jpg' },
    ],
    OffRoad: [
        { name: 'Chevrolet Colorado 2024', price: "34,303$ - 56,003$", image: 'img/OffRoad/Chevrolet-Colorado_ZR2_Bison-2024-1280-04.jpg' },
        { name: 'Chevrolet Silverado 2022', price: "45,303$ - 87,503$", image: 'img/PickupTruck/Chevrolet-Silverado-2022-1280-04.jpg' },
        { name: 'Ford F-150 2024', price: "69,000$ - 115,000$", image: 'img/PickupTruck/Ford-F-150-2024-1280-01.jpg' },
        { name: 'Ford Bronco 2023', price: "47,360$ - 108,565$" , image: 'img/OffRoad/Ford-Bronco_DR-2023-1280-07.jpg' },
        { name: 'Ford Ranger 2023', price: "41,255$ - 77,805$", image: 'img/PickupTruck/Ford-Ranger-2023-1280-02.jpg' },
        { name: 'GMC Sierra 2022', price: "56,003$ - 101,798$", image: 'img/PickupTruck/GMC-Sierra-2022-1280-02.jpg' },
        { name: 'Jeep Grand-Cherokee 2017', price: "44,195$ - 72,195$", image: 'img/OffRoad/Jeep-Grand_Cherokee_Trailhawk-2017-1280-04.jpg' },
        { name: 'Jeep Wrangler 2024', price: "41,595$ - 109,945$", image: 'img/OffRoad/Jeep-Wrangler_Willys-2024-1280-01.jpg' },
        { name: 'Land Rover Defender 2023', price: "69,000$ - 140,400$", image: 'img/OffRoad/Land_Rover-Defender_130-2023-1280-0d.jpg' },
        { name: 'Land Rover Discovery 2021', price: "68,600$ - 85,400$", image: 'img/OffRoad/Land_Rover-Discovery-2021-1280-01.jpg' },
        { name: 'Mercedes-Benz G Class 2019', price: "134,000$ - 167,000$", image: 'img/OffRoad/Mercedes-Benz-G-Class-2019-1280-07.jpg' },
        { name: 'Mercedes-Benz GLE AMG 2024', price: "75,800$ - 151,500$", image: 'img/OffRoad/Mercedes-Benz-GLE_53_AMG_Hybrid_Coupe-2024-1280-02.jpg' },
        { name: 'Mitsubishi Pajero 2007', price: "38,400$ - 47,400$", image: 'img/OffRoad/Mitsubishi-Pajero_Evolution-2007-1280-01.jpg' },
        { name: 'Nissan Patrol 2022', price: "88,500$ - 110,550$", image: 'img/OffRoad/Nissan-Patrol_AU-Version-2022-1280-0d.jpg' },
        { name: 'Nissan Xterra 2009', price: "33,298$ - 37,248$", image: 'img/OffRoad/Nissan-Xterra-2009-1280-01.jpg' },
        { name: 'RAM 1500 2019', price: "43,345$ - 75,845$", image: 'img/PickupTruck/Ram-1500-2019-1280-04.jpg' },
        { name: 'Subaru Outback 2023', price: "32,695$ - 46,395$", image: 'img/OffRoad/Subaru-Outback-2023-1280-01.jpg' },
        { name: 'Suzuki Jimny 2019', price: "21,500$ - 23,000$", image: 'img/OffRoad/Suzuki-Jimny-2019-1280-01.jpg' },
        { name: 'Toyota 4Runner 2023', price: "51,890$ - 67,060$", image: 'img/OffRoad/Toyota-4Runner_40th_Anniversary-2023-1280-01.jpg' },
        { name: 'Toyota Land Cruiser 2024', price: "NO Disponible", image: 'img/OffRoad/Toyota-Land_Cruiser_US-Version-2024-1280-03.jpg' }
    ]
  };
  
  function showCars(category) {
    const carListDiv = document.getElementById("carList");
    carListDiv.innerHTML = "";
  
    const categoryTitle = document.getElementById("categoryTitle");
    categoryTitle.textContent = "Car Categories - " + category.toUpperCase();
  
    const categoryCars = cars[category];
    for (const car of categoryCars) {
      const carDiv = document.createElement("div");
      carDiv.classList.add("car");
  
      const carImage = document.createElement("img");
      carImage.src = car.image;
      carImage.alt = car.name;
      carDiv.appendChild(carImage);
  
      const carName = document.createElement("h3");
      carName.textContent = car.name;
      carDiv.appendChild(carName);
  
      const carPrice = document.createElement("p");
      carPrice.textContent = "Price: " + car.price;
      carDiv.appendChild(carPrice);
  
      carListDiv.appendChild(carDiv);
    }
  }
  function searchCars() {
    const searchInput = document.querySelector("#search-bar input");
    const searchText = searchInput.value.toLowerCase();
  
    const allCars = Object.values(cars).flat();
    const filteredCars = allCars.filter(car => car.name.toLowerCase().includes(searchText));
  
    const carListDiv = document.getElementById("carList");
    carListDiv.innerHTML = "";
  
    if (filteredCars.length > 0) {
      for (const car of filteredCars) {
        const carDiv = document.createElement("div");
        carDiv.classList.add("car");
  
        const carImage = document.createElement("img");
        carImage.src = car.image;
        carImage.alt = car.name;
        carDiv.appendChild(carImage);
  
        const carName = document.createElement("h3");
        carName.textContent = car.name;
        carDiv.appendChild(carName);
  
        const carPrice = document.createElement("p");
        carPrice.textContent = "Price: " + car.price;
        carDiv.appendChild(carPrice);
  
        carListDiv.appendChild(carDiv);
      }
    } else {
      const noResults = document.createElement("p");
      noResults.textContent = "No cars found.";
      carListDiv.appendChild(noResults);
    }
  }
  