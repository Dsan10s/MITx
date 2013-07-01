var charsToCodes = {"æ": "&#230",
 "ç": "&#231",
 "ð": "&#240",
 "ø": "&#248",
 "ħ": "&#295",
 "ŋ": "&#331",
 "œ": "&#339",
 "ǀ": "&#448",
 "ǁ": "&#449",
 "ǂ": "&#450",
 "ǃ": "&#451",
 "ɐ": "&#592",
 "ɑ": "&#593",
 "ɒ": "&#594",
 "ɓ": "&#595",
 "ɔ": "&#596",
 "ɕ": "&#597",
 "ɖ": "&#598",
 "ɗ": "&#599",
 "ɘ": "&#600",
 "ə": "&#601",
 "ɚ": "&#602",
 "ɛ": "&#603",
 "ɜ": "&#604",
 "ɝ": "&#605",
 "ɞ": "&#606",
 "ɟ": "&#607",
 "ɠ": "&#608",
 "ɡ": "&#609",
 "ɢ": "&#610",
 "ɣ": "&#611",
 "ɤ": "&#612",
 "ɥ": "&#613",
 "ɦ": "&#614",
 "ɧ": "&#615",
 "ɨ": "&#616",
 "ɪ": "&#618",
 "ɫ": "&#619",
 "ɬ": "&#620",
 "ɭ": "&#621",
 "ɮ": "&#622",
 "ɯ": "&#623",
 "ɰ": "&#624",
 "ɱ": "&#625",
 "ɲ": "&#626",
 "ɳ": "&#627",
 "ɴ": "&#628",
 "ɵ": "&#629",
 "ɶ": "&#630",
 "ɸ": "&#632",
 "ɹ": "&#633",
 "ɺ": "&#634",
 "ɻ": "&#635",
 "ɽ": "&#637",
 "ɾ": "&#638",
 "ʀ": "&#640",
 "ʁ": "&#641",
 "ʂ": "&#642",
 "ʃ": "&#643",
 "ʄ": "&#644",
 "ʈ": "&#648",
 "ʉ": "&#649",
 "ʊ": "&#650",
 "ʋ": "&#651",
 "ʌ": "&#652",
 "ʍ": "&#653",
 "ʎ": "&#654",
 "ʏ": "&#655",
 "ʐ": "&#656",
 "ʑ": "&#657",
 "ʒ": "&#658",
 "ʔ": "&#660",
 "ʕ": "&#661",
 "ʘ": "&#664",
 "ʙ": "&#665",
 "ʛ": "&#667",
 "ʜ": "&#668",
 "ʝ": "&#669",
 "ʟ": "&#671",
 "ʡ": "&#673",
 "ʢ": "&#674",
 "ʤ": "&#676",
 "ʧ": "&#679",
 "β": "&#946",
 "θ": "&#952",
 "χ": "&#967",
 "ⱱ": "&#113"}

var charsToLinks = [{'char': "a", 'url': "http://upload.wikimedia.org/wikipedia/commons/6/65/Open_front_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "aː", 'url': "http://upload.wikimedia.org/wikipedia/commons/6/65/Open_front_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "b", 'url': "http://upload.wikimedia.org/wikipedia/commons/2/2c/Voiced_bilabial_plosive.ogg", "row": 1, "column": 2, "decCode": ""},
{'char': "c", 'url': "http://upload.wikimedia.org/wikipedia/commons/5/5d/Voiceless_palatal_plosive.ogg", "row": 1, "column": 13, "decCode": ""},
{'char': "dz", 'url': "http://upload.wikimedia.org/wikipedia/commons/d/d8/Voiced_alveolar_sibilant_affricate.oga", "row": "", "column": "", "decCode": ""},
{'char': "d", 'url': "http://upload.wikimedia.org/wikipedia/commons/0/01/Voiced_alveolar_plosive.ogg", "row": 1, "column": 8, "decCode": ""},
{'char': "dʐ", 'url': "http://upload.wikimedia.org/wikipedia/commons/5/58/Voiced_retroflex_affricate.ogg", "row": "", "column": "", "decCode": ""},
{'char': "dʑ", 'url': "http://upload.wikimedia.org/wikipedia/commons/c/c1/Voiced_alveolo-palatal_affricate.ogg", "row": "", "column": "", "decCode": ""},
{'char': "dʒ", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/e6/Voiced_palato-alveolar_affricate.ogg", "row": "", "column": "", "decCode": ""},
{'char': "e", 'url': "http://upload.wikimedia.org/wikipedia/commons/6/6c/Close-mid_front_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "eː", 'url': "http://upload.wikimedia.org/wikipedia/commons/6/6c/Close-mid_front_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "f", 'url': "http://upload.wikimedia.org/wikipedia/commons/3/33/Voiceless_labiodental_fricative.ogg", "row": 5, "column": 3, "decCode": ""},
{'char': "h", 'url': "http://upload.wikimedia.org/wikipedia/commons/d/da/Voiceless_glottal_fricative.ogg", "row": 5, "column": 21, "decCode": ""},
{'char': "i", 'url': "http://upload.wikimedia.org/wikipedia/commons/9/91/Close_front_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "iː", 'url': "http://upload.wikimedia.org/wikipedia/commons/9/91/Close_front_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "j", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/e8/Palatal_approximant.ogg", "row": 7, "column": 14, "decCode": ""},
{'char': "k", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/e3/Voiceless_velar_plosive.ogg", "row": 1, "column": 15, "decCode": ""},
{'char': "l", 'url': "http://upload.wikimedia.org/wikipedia/commons/b/bc/Alveolar_lateral_approximant.ogg", "row": 8, "column": 8, "decCode": ""},
{'char': "m", 'url': "http://upload.wikimedia.org/wikipedia/commons/a/a9/Bilabial_nasal.ogg", "row": 2, "column": 2, "decCode": ""},
{'char': "n", 'url': "http://upload.wikimedia.org/wikipedia/commons/2/29/Alveolar_nasal.ogg", "row": 2, "column": 8, "decCode": ""},
{'char': "o", 'url': "http://upload.wikimedia.org/wikipedia/commons/8/84/Close-mid_back_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "oː", 'url': "http://upload.wikimedia.org/wikipedia/commons/8/84/Close-mid_back_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "p", 'url': "http://upload.wikimedia.org/wikipedia/commons/5/51/Voiceless_bilabial_plosive.ogg", "row": 1, "column": 1, "decCode": ""},
{'char': "q", 'url': "http://upload.wikimedia.org/wikipedia/commons/1/19/Voiceless_uvular_plosive.ogg", "row": 1, "column": 17, "decCode": ""},
{'char': "r", 'url': "http://upload.wikimedia.org/wikipedia/commons/c/ce/Alveolar_trill.ogg", "row": 3, "column": 8, "decCode": ""},
{'char': "s", 'url': "http://upload.wikimedia.org/wikipedia/commons/a/ac/Voiceless_alveolar_sibilant.ogg", "row": 5, "column": 7, "decCode": ""},
{'char': "ts", 'url': "http://upload.wikimedia.org/wikipedia/commons/9/9d/Voiceless_alveolar_sibilant_affricate.oga", "row": "", "column": "", "decCode": ""},
{'char': "t", 'url': "http://upload.wikimedia.org/wikipedia/commons/0/02/Voiceless_alveolar_plosive.ogg", "row": 1, "column": 7, "decCode": ""},
{'char': "tɕ", 'url': "http://upload.wikimedia.org/wikipedia/commons/c/c4/Voiceless_alveolo-palatal_affricate.ogg", "row": "", "column": "", "decCode": ""},
{'char': "tʂ", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/e9/Voiceless_retroflex_affricate.ogg", "row": "", "column": "", "decCode": ""},
{'char': "tʃ", 'url': "http://upload.wikimedia.org/wikipedia/commons/9/97/Voiceless_palato-alveolar_affricate.ogg", "row": "", "column": "", "decCode": ""},
{'char': "u", 'url': "http://upload.wikimedia.org/wikipedia/commons/5/5d/Close_back_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "uː", 'url': "http://upload.wikimedia.org/wikipedia/commons/5/5d/Close_back_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "v", 'url': "http://upload.wikimedia.org/wikipedia/commons/8/85/Voiced_labiodental_fricative.ogg", "row": 5, "column": 4, "decCode": ""},
{'char': "w", 'url': "http://upload.wikimedia.org/wikipedia/commons/f/f2/Voiced_labio-velar_approximant.ogg", "row": 7, "column": "", "decCode": ""},
{'char': "x", 'url': "http://upload.wikimedia.org/wikipedia/commons/0/0f/Voiceless_velar_fricative.ogg", "row": 5, "column": 15, "decCode": ""},
{'char': "y", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/ea/Close_front_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "yː", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/ea/Close_front_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "z", 'url': "http://upload.wikimedia.org/wikipedia/commons/c/c0/Voiced_alveolar_sibilant.ogg", "row": 5, "column": 8, "decCode": ""},
{'char': "ä", 'url': "http://upload.wikimedia.org/wikipedia/commons/5/50/Open_central_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "æ", 'url': "http://upload.wikimedia.org/wikipedia/commons/c/c9/Near-open_front_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ç", 'url': "http://upload.wikimedia.org/wikipedia/commons/a/ab/Voiceless_palatal_fricative.ogg", "row": 5, "column": 13, "decCode": ""},
{'char': "ð", 'url': "http://upload.wikimedia.org/wikipedia/commons/6/6a/Voiced_dental_fricative.ogg", "row": 5, "column": 6, "decCode": ""},
{'char': "ø", 'url': "http://upload.wikimedia.org/wikipedia/commons/5/53/Close-mid_front_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "øː", 'url': "http://upload.wikimedia.org/wikipedia/commons/5/53/Close-mid_front_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ħ", 'url': "http://upload.wikimedia.org/wikipedia/commons/b/b2/Voiceless_pharyngeal_fricative.ogg", "row": 5, "column": 19, "decCode": ""},
{'char': "ŋ", 'url': "http://upload.wikimedia.org/wikipedia/commons/3/39/Velar_nasal.ogg", "row": 2, "column": 16, "decCode": ""},
{'char': "œ", 'url': "http://upload.wikimedia.org/wikipedia/commons/0/00/Open-mid_front_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "œː", 'url': "http://upload.wikimedia.org/wikipedia/commons/0/00/Open-mid_front_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "œ̃", 'url': "No link found", "decCode": ""},
{'char': "ǀ", 'url': "http://upload.wikimedia.org/wikipedia/commons/1/1f/Dental_click.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ǁ", 'url': "http://upload.wikimedia.org/wikipedia/commons/f/f4/Alveolar_lateral_click.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ǃ", 'url': "http://upload.wikimedia.org/wikipedia/commons/3/3c/Postalveolar_click.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɐ", 'url': "http://upload.wikimedia.org/wikipedia/commons/2/22/Near-open_central_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɑ", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/e5/Open_back_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɑː", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/e5/Open_back_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɑ̃", 'url': "No link found", "decCode": ""},
{'char': "ɒ", 'url': "http://upload.wikimedia.org/wikipedia/commons/0/0a/Open_back_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɓ", 'url': "http://upload.wikimedia.org/wikipedia/commons/3/31/Voiced_bilabial_implosive.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɔ", 'url': "http://upload.wikimedia.org/wikipedia/commons/0/02/Open-mid_back_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɔː", 'url': "http://upload.wikimedia.org/wikipedia/commons/0/02/Open-mid_back_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɔ̃", 'url': "No link found", "decCode": ""},
{'char': "ɕ", 'url': "http://upload.wikimedia.org/wikipedia/commons/0/0b/Voiceless_alveolo-palatal_sibilant.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɖ", 'url': "http://upload.wikimedia.org/wikipedia/commons/2/27/Voiced_retroflex_stop.oga", "row": 1, "column": 12, "decCode": ""},
{'char': "ɗ", 'url': "http://upload.wikimedia.org/wikipedia/commons/c/c3/Voiced_alveolar_implosive.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ə", 'url': "http://upload.wikimedia.org/wikipedia/commons/d/d9/Mid-central_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɚ", 'url': "No link found", "decCode": ""},
{'char': "ɛ", 'url': "http://upload.wikimedia.org/wikipedia/commons/7/71/Open-mid_front_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɛ̃", 'url': "No link found", "decCode": ""},
{'char': "ɜ", 'url': "http://upload.wikimedia.org/wikipedia/commons/0/01/Open-mid_central_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɝ", 'url': "No link found", "decCode": ""},
{'char': "ɟ", 'url': "http://upload.wikimedia.org/wikipedia/commons/1/1d/Voiced_palatal_plosive.ogg", "row": 1, "column": 14, "decCode": ""},
{'char': "ɠ", 'url': "http://upload.wikimedia.org/wikipedia/commons/a/a8/Voiced_velar_implosive.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɡ", 'url': "http://upload.wikimedia.org/wikipedia/commons/b/b4/Voiced_velar_plosive.ogg", "row": 1, "column": 16, "decCode": ""},
{'char': "ɢ", 'url': "http://upload.wikimedia.org/wikipedia/commons/b/b6/Voiced_uvular_stop.oga", "row": 1, "column": 18, "decCode": ""},
{'char': "ɣ", 'url': "http://upload.wikimedia.org/wikipedia/commons/4/47/Voiced_velar_fricative.ogg", "row": 5, "column": 16, "decCode": ""},
{'char': "ɤ", 'url': "http://upload.wikimedia.org/wikipedia/commons/2/26/Close-mid_back_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɥ", 'url': "http://upload.wikimedia.org/wikipedia/commons/f/fe/Labial-palatal_approximant.ogg", "row": 7, "column": "", "decCode": ""},
{'char': "ɦ", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/e2/Voiced_glottal_fricative.ogg", "row": 5, "column": 22, "decCode": ""},
{'char': "ɧ", 'url': "http://upload.wikimedia.org/wikipedia/commons/4/42/Voiceless_dorso-palatal_velar_fricative.ogg", "row": 5, "column": "", "decCode": ""},
{'char': "ɨ", 'url': "http://upload.wikimedia.org/wikipedia/commons/5/53/Close_central_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɪ", 'url': "http://upload.wikimedia.org/wikipedia/commons/4/4c/Near-close_near-front_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɫ", 'url': "http://upload.wikimedia.org/wikipedia/commons/d/d3/Velarized_alveolar_lateral_approximant.ogg", "row": 8, "column": "", "decCode": ""},
{'char': "ɬ", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/ea/Voiceless_alveolar_lateral_fricative.ogg", "row": 6, "column": 7, "decCode": ""},
{'char': "ɭ", 'url': "http://upload.wikimedia.org/wikipedia/commons/d/d1/Retroflex_lateral_approximant.ogg", "row": 8, "column": 12, "decCode": ""},
{'char': "ɮ", 'url': "http://upload.wikimedia.org/wikipedia/commons/6/6f/Voiced_alveolar_lateral_fricative.ogg", "row": 6, "column": 8, "decCode": ""},
{'char': "ɯ", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/e8/Close_back_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɰ", 'url': "http://upload.wikimedia.org/wikipedia/commons/5/5c/Voiced_velar_approximant.ogg", "row": 7, "column": 16, "decCode": ""},
{'char': "ɱ", 'url': "http://upload.wikimedia.org/wikipedia/commons/1/18/Labiodental_nasal.ogg", "row": 2, "column": 4, "decCode": ""},
{'char': "ɲ", 'url': "http://upload.wikimedia.org/wikipedia/commons/4/46/Palatal_nasal.ogg", "row": 2, "column": 14, "decCode": ""},
{'char': "ɳ", 'url': "http://upload.wikimedia.org/wikipedia/commons/a/af/Retroflex_nasal.ogg", "row": 2, "column": 12, "decCode": ""},
{'char': "ɴ", 'url': "http://upload.wikimedia.org/wikipedia/commons/3/3e/Uvular_nasal.ogg", "row": 2, "column": 18, "decCode": ""},
{'char': "ɵ", 'url': "http://upload.wikimedia.org/wikipedia/commons/b/b5/Close-mid_central_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɸ", 'url': "http://upload.wikimedia.org/wikipedia/commons/4/41/Voiceless_bilabial_fricative.ogg", "row": 5, "column": 1, "decCode": ""},
{'char': "ɹ", 'url': "http://upload.wikimedia.org/wikipedia/commons/1/1f/Alveolar_approximant.ogg", "row": 7, "column": 8, "decCode": ""},
{'char': "ɺ", 'url': "http://upload.wikimedia.org/wikipedia/commons/d/df/Alveolar_lateral_flap.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ɻ", 'url': "http://upload.wikimedia.org/wikipedia/commons/d/d2/Retroflex_approximant.ogg", "row": 7, "column": 12, "decCode": ""},
{'char': "ɽ", 'url': "http://upload.wikimedia.org/wikipedia/commons/8/87/Retroflex_flap.ogg", "row": 4, "column": 12, "decCode": ""},
{'char': "ɾ", 'url': "http://upload.wikimedia.org/wikipedia/commons/a/a0/Alveolar_tap.ogg", "row": 4, "column": 8, "decCode": ""},
{'char': "ʀ", 'url': "http://upload.wikimedia.org/wikipedia/commons/c/cb/Uvular_trill.ogg", "row": 3, "column": 18, "decCode": ""},
{'char': "ʁ", 'url': "http://upload.wikimedia.org/wikipedia/commons/a/af/Voiced_uvular_fricative.ogg", "row": 5, "column": 18, "decCode": ""},
{'char': "ʂ", 'url': "http://upload.wikimedia.org/wikipedia/commons/b/b1/Voiceless_retroflex_sibilant.ogg", "row": 5, "column": 11, "decCode": ""},
{'char': "ʃ", 'url': "http://upload.wikimedia.org/wikipedia/commons/c/cc/Voiceless_palato-alveolar_sibilant.ogg", "row": 5, "column": 9, "decCode": ""},
{'char': "ʄ", 'url': "http://upload.wikimedia.org/wikipedia/commons/2/2c/Voiced_palatal_implosive.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ʈ", 'url': "http://upload.wikimedia.org/wikipedia/commons/b/b0/Voiceless_retroflex_stop.oga", "row": 1, "column": 11, "decCode": ""},
{'char': "ʉ", 'url': "http://upload.wikimedia.org/wikipedia/commons/6/66/Close_central_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ʊ", 'url': "http://upload.wikimedia.org/wikipedia/commons/d/d5/Near-close_near-back_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ʋ", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/ee/Labiodental_approximant.ogg", "row": 7, "column": 4, "decCode": ""},
{'char': "ʌ", 'url': "http://upload.wikimedia.org/wikipedia/commons/9/92/Open-mid_back_unrounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ʍ", 'url': "http://upload.wikimedia.org/wikipedia/commons/a/a7/Voiceless_labio-velar_fricative.ogg", "row": 5, "column": 15, "decCode": ""},
{'char': "ʎ", 'url': "http://upload.wikimedia.org/wikipedia/commons/d/d9/Palatal_lateral_approximant.ogg", "row": 8, "column": 14, "decCode": ""},
{'char': "ʏ", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/e3/Near-close_near-front_rounded_vowel.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ʐ", 'url': "http://upload.wikimedia.org/wikipedia/commons/7/7f/Voiced_retroflex_sibilant.ogg", "row": 5, "column": 12, "decCode": ""},
{'char': "ʑ", 'url': "http://upload.wikimedia.org/wikipedia/commons/1/15/Voiced_alveolo-palatal_sibilant.ogg", "row": "", "column": "", "decCode": ""},
{'char': "ʒ", 'url': "http://upload.wikimedia.org/wikipedia/commons/3/30/Voiced_palato-alveolar_sibilant.ogg", "row": 5, "column": 10, "decCode": ""},
{'char': "ʔ", 'url': "http://upload.wikimedia.org/wikipedia/commons/4/4d/Glottal_stop.ogg", "row": 1, "column": 21, "decCode": ""},
{'char': "ʕ", 'url': "http://upload.wikimedia.org/wikipedia/en/0/0c/Voiced_pharyngeal_fricative1.ogg", "row": 5, "column": 20, "decCode": ""},
{'char': "ʙ", 'url': "http://upload.wikimedia.org/wikipedia/commons/e/e7/Bilabial_trill.ogg", "row": 3, "column": 2, "decCode": ""},
{'char': "ʝ", 'url': "http://upload.wikimedia.org/wikipedia/commons/a/ac/Voiced_palatal_fricative.ogg", "row": 5, "column": 14, "decCode": ""},
{'char': "ʰ", 'url': "No link found", "decCode": ""},
{'char': "ʲ", 'url': "No link found", "decCode": ""},
{'char': "ʷ", 'url': "No link found", "decCode": ""},
{'char': "β", 'url': "http://upload.wikimedia.org/wikipedia/commons/3/37/Voiced_bilabial_fricative.ogg", "row": 5, "column": 2, "decCode": ""},
{'char': "θ", 'url': "http://upload.wikimedia.org/wikipedia/commons/8/80/Voiceless_dental_fricative.ogg", "row": 5, "column": 5, "decCode": ""},
{'char': "χ", 'url': "http://upload.wikimedia.org/wikipedia/commons/c/c8/Voiceless_uvular_fricative.ogg", "row": 5, "column": 17, "decCode": ""},
{'char': "L", 'url': "http://upload.wikimedia.org/wikipedia/commons/d/d3/Velar_lateral_approximant.ogg", "row": 8, "column": 16, "decCode": "&#671"},
{'char': "ⱱ", 'url': "https://upload.wikimedia.org/wikipedia/commons/2/2c/Labiodental_flap.ogg", "row": 4, "column": 4, "decCode": ""}]

var IPANonPulmonic = (function(){
	var exports = {};
	var setupChart = function(div){
		var table = $("<table class='np-consonants table table-hover table-bordered' border = 1></table>");
		var row0 = $("<tr class = 'np-row0'></tr>");
		var row1 = $("<tr class = 'np-row1'></tr>");
		var row2 = $("<tr class = 'np-row2'></tr>");
		var row3 = $("<tr class = 'np-row3'></tr>");
		var row4 = $("<tr class = 'np-row4'></tr>");
		var row5 = $("<tr class = 'np-row5'></tr>");
		
		var r0col1 = $("<td class = 'labels' id = 'clicks'><div id = 'clicksDiv'>Clicks</div></td>");
		var r0col2 = $("<td class = 'labels' id = 'voiced-implosives'><div id = 'voicedImplosivesDiv'>Voiced Implosives</div></td>");
		var r0col3 = $("<td class = 'labels' id = 'ejectives'><div id = 'ejectivesDiv'>Ejectives</div></td>");
		
		var r1col1 = $("<td id = 'np-col1'><audio id='bilabialClick' src='http://upload.wikimedia.org/wikipedia/commons/2/2b/Clic_bilabial_sourd.ogg'></audio><div><button id = 'button' >&#664</button></div>Bilabial</td>");
		var r1col2 = $("<td id = 'np-col2'><audio id='bilabialImplosive' src='http://upload.wikimedia.org/wikipedia/commons/3/31/Voiced_bilabial_implosive.ogg'></audio><div><button id = 'button' onclick='document.getElementById('bilabialClick').play()'>&#595</button></div>Bilabial</td>");
		var r1col3 = $("<td id = 'np-col3'><div><button id = 'button'>'</button></div>Examples:</td>");

		var r2col1 = $("<td id = 'np-col1'><audio id='dentalClick' src='http://upload.wikimedia.org/wikipedia/commons/2/2b/Clic_bilabial_sourd.ogg'></audio><div><button id = 'button' onclick='document.getElementById('dentalClick').play()'>&#448</button></div>Dental</td>");
		var r2col2 = $("<td id = 'np-col2'><audio id='dentalImplosive' src='http://upload.wikimedia.org/wikipedia/commons/c/c3/Voiced_alveolar_implosive.ogg'></audio><div><button id = 'button' onclick='document.getElementById('dentalImplosive').play()'>&#599</button></div>Dental/alveolar</td>");
		var r2col3 = $("<td id = 'np-col3'><audio id='bilabialEjective' src='http://upload.wikimedia.org/wikipedia/commons/6/64/Bilabial_ejective_plosive.ogg'></audio><div><button id = 'button' onclick='document.getElementById('bilabialEjective').play()'>p'</button></div>Bilabial</td>");

		var r3col1 = $("<td id = 'np-col1'><audio id='postalveolarClick' src='http://upload.wikimedia.org/wikipedia/commons/3/3c/Postalveolar_click.ogg'></audio><div><button id = 'button' onclick='document.getElementById('postalveolarClick').play()'>&#451</button></div>(Post)alveolar</td>");
		var r3col2 = $("<td id = 'np-col2'><audio id='palatalImplosive' src='http://upload.wikimedia.org/wikipedia/commons/2/2c/Voiced_palatal_implosive.ogg'></audio><div><button id = 'button' onclick='document.getElementById('palatalImplosive').play()'>&#644</button></div>Palatal</td>");
		var r3col3 = $("<td id = 'np-col3'><audio id='dentalEjective' src='http://upload.wikimedia.org/wikipedia/commons/d/d7/Alveolar_ejective_plosive.ogg'></audio><div><button id = 'button' onclick='document.getElementById('dentalEjective').play()'>t'</button></div>Dental/alveolar</td>");

		var r4col1 = $("<td id = 'np-col1'><audio id='palatoalveolarClick' src='http://upload.wikimedia.org/wikipedia/commons/8/89/Palatoalveolar_click.ogg'></audio><div><button id = 'button' onclick='document.getElementById('palatoalveolarClick').play()'>&#450</button></div>Palatoalveolar</td>");
		var r4col2 = $("<td id = 'np-col2'><audio id='velarImplosive' src='http://upload.wikimedia.org/wikipedia/commons/a/a8/Voiced_velar_implosive.ogg'></audio><div><button id = 'button' onclick='document.getElementById('velarImplosive').play()'>&#608</button></div>Velar</td>");
		var r4col3 = $("<td id = 'np-col3'><audio id='velarEjective' src='http://upload.wikimedia.org/wikipedia/commons/a/a0/Velar_ejective_plosive.ogg'></audio><div><button id = 'button' onclick='document.getElementById('velarEjective').play()'>k'</button></div>Velar</td>");

		var r5col1 = $("<td id = 'np-col1'><audio id='alveolarLateral' src='http://upload.wikimedia.org/wikipedia/commons/f/f4/Alveolar_lateral_click.ogg'></audio><div><button id = 'button' onclick='document.getElementById('alveolarLateral').play()'>&#449</button></div>Alveolar lateral</td>");
		var r5col2 = $("<td id = 'np-col2'><audio id='uvularImplosive' src='http://upload.wikimedia.org/wikipedia/commons/0/00/Voiced_uvular_implosive.ogg'></audio><div><button id = 'button' onclick='document.getElementById('uvularImplosive').play()'>&#667</button></div>Uvular</td>");
		var r5col3 = $("<td id = 'np-col3'><audio id='fricativeEjective' src='http://upload.wikimedia.org/wikipedia/commons/7/7c/Alveolar_ejective_fricative.ogg'></audio><div><button id = 'button' onclick='document.getElementById('fricativeEjective').play()'>s'</button></div>Alveolar fricative</td>");

		$(row0).append(r0col1, r0col2, r0col3);
		$(row1).append(r1col1, r1col2, r1col3);
		$(row2).append(r2col1, r2col2, r2col3);
		$(row3).append(r3col1, r3col2, r3col3);
		$(row4).append(r4col1, r4col2, r4col3);
		$(row5).append(r5col1, r5col2, r5col3);

		$(table).append(row0, row1, row2, row3, row4, row5);
		$(div).append(table);
		$(div).css("margin-top", "100px");
	}
	exports.setupChart = setupChart;
	return exports;
}());

$(document).ready(function(){
	$(".IPANonPulmonic").each(function(){
		IPANonPulmonic.setupChart(this);
	})
});
$(document).ready(function(){
	$ (".np-consonants #clicksDiv").popover({trigger: "hover", animation: false, placement: "top", content: "Clicks are made by creating a suction-like pressure in the mouth which is suddenly released, drawing air into the mouth.  The place of articulation is where the pressure/release occurs."});
	$(".np-consonants #voicedImplosivesDiv").popover({trigger: "hover", animation: false, placement: "top", content: "Voiced implosives are made with an inward moving airstream which is formed by suction created by the downward movement of the larynx while another complete stop/obstruction is held further forward in the mouth."});
	$(".np-consonants #ejectivesDiv").popover({trigger: "hover", animation: false, placement: "top", content: "Ejectives are made by squeezing air trapped between the glottis and closure that is further forward in the mouth, and releasing it suddenly or through a brief fricative-like action."});
	
	$(".np-row1 #np-col1 button").on("click", function(){ document.getElementById("bilabialClick").play();});
	$(".np-row1 #np-col2 button").on("click", function(){ document.getElementById("bilabialImplosive").play();});
	//$(".np-row1 #np-col3 button").on("click", function(){ document.getElementById("bilabialClick").play();});

	$(".np-row2 #np-col1 button").on("click", function(){ document.getElementById("dentalClick").play();});
	$(".np-row2 #np-col2 button").on("click", function(){ document.getElementById("dentalImplosive").play();});
	$(".np-row2 #np-col3 button").on("click", function(){ document.getElementById("bilabialEjective").play();});

	$(".np-row3 #np-col1 button").on("click", function(){ document.getElementById("postalveolarClick").play();});
	$(".np-row3 #np-col2 button").on("click", function(){ document.getElementById("palatalImplosive").play();});
	$(".np-row3 #np-col3 button").on("click", function(){ document.getElementById("dentalEjective").play();});

	$(".np-row4 #np-col1 button").on("click", function(){ document.getElementById("palatoalveolarClick").play();});
	$(".np-row4 #np-col2 button").on("click", function(){ document.getElementById("velarImplosive").play();});
	$(".np-row4 #np-col3 button").on("click", function(){ document.getElementById("velarEjective").play();});

	$(".np-row5 #np-col1 button").on("click", function(){ document.getElementById("alveolarLateral").play();});
	$(".np-row5 #np-col2 button").on("click", function(){ document.getElementById("uvularImplosive").play();});
	$(".np-row5 #np-col3 button").on("click", function(){ document.getElementById("fricativeEjective").play();});


});
	