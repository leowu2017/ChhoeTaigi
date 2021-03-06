// https://github.com/ChhoeTaigi/ChhoeTaigiDatabase

module.exports = [
    {
        name: 'KamJitian',
        chineseName: '1913 甘字典',
        brief: {
            poj_unicode: '白話字',
            kip_unicode: '教育部羅馬拼音',
            hanji_taibun: '漢字台文',
            hanlo_taibun_kaisoeh_poj: '漢羅台文解說(白話字)',
        },
        briefWidth: {
            poj_unicode: '150px',
            kip_unicode: '150px',
            hanji_taibun: '100px',
            hanlo_taibun_kaisoeh_poj: '512px',
        },
        columns: {
            id: '番號',
            poj_unicode: '白話字',
            poj_input: '白話字輸入',
            hanji_taibun: '漢字台文',
            poj_bunim_unicode: '漢字文讀音(白話字)',
            poj_bunim_input: '漢字文讀音(白話字輸入)',
            poj_kaisoeh: '台文解說(白話字)',
            hanlo_taibun_kaisoeh_poj: '漢羅台文解說(白話字)',
            kip_unicode: '教育部羅馬拼音',
            kip_input: '教育部羅馬拼音輸入',
            kip_bunim_unicode: '漢字文讀音(教育部羅馬拼音)',
            kip_bunim_input: '漢字文讀音(教育部羅馬拼音輸入)',
            kip_kaisoeh: '台文解說(教育部羅馬拼音)',
            page_number: '原冊頁數',
        }
    },
    {
        name: 'TaioanSitbutMialui',
        chineseName: '1928 台灣植物名彙',
        brief: {
            poj_unicode: '白話字',
            kip_unicode: '教育部羅馬拼音',
            hanji_taibun: '漢字台文',
        },
        briefWidth: {
            poj_unicode: '350px',
            kip_unicode: '350px',
            hanji_taibun: '212px',
        },
        columns: {
            id: '番號',
            poj_unicode: '白話字',
            poj_input: '白話字輸入',
            kip_unicode: '教育部羅馬拼音',
            kip_input: '教育部羅馬拼音輸入',
            hanji_taibun: '漢字台文',
            page_number: '原冊頁數',
        }
    },
    {
        name: 'TaijitToaSutian',
        chineseName: '1932 台日大辭典(台譯版)',
        brief: {
            poj_unicode: '白話字',
            kip_unicode: '教育部羅馬拼音',
            hanlo_taibun_poj: '漢羅台文(白話字)',
            hanlo_taibun_kaisoeh_poj: '漢羅台文解說(白話字)',
        },
        briefWidth: {
            poj_unicode: '150px',
            kip_unicode: '150px',
            hanlo_taibun_poj: '150px',
            hanlo_taibun_kaisoeh_poj: '350px',
        },
        columns: {
            id: '番號',
            poj_unicode: '白話字',
            poj_unicode_other: '白話字(其他講法)',
            poj_input: '白話字輸入',
            poj_input_other: '白話字輸入(其他講法)',
            hanlo_taibun_poj: '漢羅台文(白話字)',
            hanlo_taibun_kaisoeh_poj: '漢羅台文解說(白話字)',
            hanlo_taibun_leku_poj: '漢羅台文例句(白話字)',
            kip_unicode: '教育部羅馬拼音',
            kip_unicode_other: '教育部羅馬拼音(其他講法)',
            kip_input: '教育部羅馬拼音輸入',
            kip_input_other: '教育部羅馬拼音輸入(其他講法)',
            hanlo_taibun_kip: '漢羅台文(教育部羅馬拼音)',
            hanlo_taibun_kaisoeh_kip: '漢羅台文解說(教育部羅馬拼音)',
            hanlo_taibun_leku_kip: '漢羅台文例句(教育部羅馬拼音)',
            page_number: '原冊頁數',
        }
    },
    {
        name: 'TaioanPehoeKichhooGiku',
        chineseName: '1956 台灣白話基礎語句',
        brief: {
            poj_unicode: '白話字',
            kip_unicode: '教育部羅馬拼音',
            hoabun: '對應華文',
            english: '對應英文',
        },
        briefWidth: {
            poj_unicode: '150px',
            kip_unicode: '150px',
            hoabun: '150px',
            english: '350px',
        },
        columns: {
            id: '番號',
            poj_unicode: '白話字',
            poj_unicode_other: '白話字(其他講法)',
            poj_input: '白話字輸入',
            poj_input_other: '白話字輸入(其他講法)',
            kip_unicode: '教育部羅馬拼音',
            kip_unicode_other: '教育部羅馬拼音(其他講法)',
            kip_input: '教育部羅馬拼音輸入',
            kip_input_other: '教育部羅馬拼音輸入(其他講法)',
            hoabun: '對應華文',
            english: '對應英文',
            english_soatbeng: '英文說明',
            noun_classifiers: '單位量詞',
            example_su: '例詞',
            opposite: '反義詞',
            example_ku_taibun_poj: '例句(白話字台文)',
            example_ku_english: '例句(英文)',
            example_ku_hoabun: '例句(華文)',
            from_su: '參照',
            page_number: '原冊頁數',
        }
    },
    {
        name: 'EmbreeTaiengSutian',
        chineseName: '1973 Embree台英辭典',
        brief: {
            poj_unicode: '白話字',
            kip_unicode: '教育部羅馬拼音',
            hoabun: '對應華文',
            english: '對應英文',
        },
        briefWidth: {
            poj_unicode: '150px',
            kip_unicode: '150px',
            hoabun: '150px',
            english: '350px',
        },
        columns: {
            id: '番號',
            poj_unicode: '白話字',
            poj_input: '白話字輸入',
            kip_unicode: '教育部羅馬拼音',
            kip_input: '教育部羅馬拼音輸入',
            abbreviations: '詞類縮寫',
            noun_classifiers: '單位量詞',
            reduplication: '疊詞',
            hoabun: '華文',
            english: '英文解說',
            synonym: 'Kāng義詞',
            cf: '參照',
            page_number: '原冊頁數(暫時無)',
        }
    },
    {
        name: 'MaryknollTaiengSutian',
        chineseName: '1976 Maryknoll台英辭典',
        brief: {
            poj_unicode: '白話字',
            kip_unicode: '教育部羅馬拼音',
            hoabun: '對應華文',
            english: '對應英文',
        },
        briefWidth: {
            poj_unicode: '150px',
            kip_unicode: '150px',
            hoabun: '150px',
            english: '350px',
        },
        columns: {
            id: '番號',
            poj_unicode: '白話字',
            poj_input: '白話字輸入',
            kip_unicode: '教育部羅馬拼音',
            kip_input: '教育部羅馬拼音輸入',
            hoabun: '華文',
            english: '英文解說',
            page_number: '原冊頁數(暫時無)',
        }
    },
    {
        name: 'TaihoaSoanntengTuichiautian',
        chineseName: '2002+ 台華線頂對照典',
        brief: {
            poj_unicode: '白話字',
            kip_unicode: '教育部羅馬拼音',
            hanlo_taibun_poj: '漢羅台文(白話字)',
            hoabun: '對應華文',
        },
        briefWidth: {
            poj_unicode: '200px',
            kip_unicode: '200px',
            hanlo_taibun_poj: '200px',
            hoabun: '200px',
        },
        columns: {
            id: '番號',
            poj_unicode: '白話字',
            poj_unicode_other: '白話字(其他講法)',
            poj_input: '白話字輸入',
            poj_input_other: '白話字輸入(其他講法)',
            hanlo_taibun_poj: '漢羅台文(白話字)',
            kip_unicode: '教育部羅馬拼音',
            kip_unicode_other: '教育部羅馬拼音(其他講法)',
            kip_input: '教育部羅馬拼音輸入',
            kip_input_other: '教育部羅馬拼音輸入(其他講法)',
            hanlo_taibun_kip: '漢羅台文(教育部羅馬拼音)',
            hoabun: '華文',
        }
    },
    {
        name: 'TJTaigiPehoeSioSutian',
        chineseName: '2009 TJ台語白話小詞典',
        brief: {
            poj_unicode: '白話字',
            poj_unicode_other: '白話字(其他講法)',
            page_number: '原冊頁數',
        },
        briefWidth: {
            poj_unicode: '250px',
            poj_unicode_other: '250px',
            page_number: '400px',
        },
        columns: {
            id: '番號',
            poj_unicode: '白話字',
            poj_unicode_other: '白話字(其他講法)',
            poj_input: '白話字輸入',
            poj_input_other: '白話字輸入(其他講法)',
            kip_unicode: '教育部羅馬拼音',
            kip_unicode_other: '教育部羅馬拼音(其他講法)',
            kip_input: '教育部羅馬拼音輸入',
            kip_input_other: '教育部羅馬拼音輸入(其他講法)',
            page_number: '原冊頁數',
            store_link: '來去買冊',
        }
    },
    {
        name: 'KauiokpooTaigiSutian',
        chineseName: '2011+ 教育部台語辭典',
        brief: {
            poj_unicode: '白話字',
            kip_unicode: '教育部羅馬拼音',
            hanji_taibun: '漢字台文',
            hoabun: '對應華文',
        },
        briefWidth: {
            poj_unicode: '200px',
            kip_unicode: '200px',
            hanji_taibun: '180px',
            hoabun: '300px',
        },
        columns: {
            id: '番號',
            poj_unicode: '白話字',
            poj_unicode_other: '白話字(其他講法)',
            poj_input: '白話字輸入',
            poj_input_other: '白話字輸入(其他講法)',
            kip_unicode: '教育部羅馬拼音',
            kip_unicode_other: '教育部羅馬拼音(其他講法)',
            kip_input: '教育部羅馬拼音輸入',
            kip_input_other: '教育部羅馬拼音輸入(其他講法)',
            hanji_taibun: '漢字台文',
            hanji_taibun_other: '漢字台文(其他寫法)',
            word_property: '字詞屬性',
            word_bunpeh_property: '文白屬性',
            other_word_bunpeh_property: '文白屬性(其他講法)',
            hoabun: '華文',
            descriptions_poj: '華文解說、詞性，台文例詞、例句',
            descriptions_kip: '華文解說、詞性，台文例詞、例句',
            dialects_poj: '無kāng所在ê講法(白話字)',
            dialects_kip: '無kāng所在ê講法(教育部羅馬拼音)',
            synonym: 'Kāng義詞',
            opposite: '反義詞',
        }
    },
    {
        name: 'iTaigiHoataiTuichiautian',
        chineseName: '2016+ iTaigi華台對照典',
        brief: {
            poj_unicode: '白話字',
            kip_unicode: '教育部羅馬拼音',
            hanlo_taibun_poj: '漢羅台文(白話字)',
            hoabun: '對應華文',
        },
        briefWidth: {
            poj_unicode: '200px',
            kip_unicode: '200px',
            hanlo_taibun_poj: '200px',
            hoabun: '250px',
        },
        columns: {
            id: '番號',
            poj_unicode: '白話字',
            poj_input: '白話字輸入',
            kip_unicode: '教育部羅馬拼音',
            kip_input: '教育部羅馬拼音輸入',
            hanlo_taibun_poj: '漢羅台文(白話字)',
            hanlo_taibun_kip: '漢羅台文(教育部羅馬拼音)',
            hoabun: '華文',
            from: '字詞來源',
        }
    },
]