// Language Selection JavaScript

let selectedLanguage = null;
let allLanguages = [];
let currentPreviewLanguage = null;

// Indian Language data with translations
const languageData = {
    hi: {
        name: 'Hindi',
        nativeName: 'हिन्दी',
        flag: '🇮🇳',
        rtl: false,
        region: 'North India',
        speakers: '600M+',
        translations: {
            welcome: 'CropGuard AI में आपका स्वागत है',
            features: 'AI-संचालित फसल रोग पहचान',
            dashboard: 'आपका कृषि डैशबोर्ड',
            selectLanguage: 'अपनी भाषा चुनें',
            languageDescription: 'CropGuard AI के साथ जारी रखने के लिए अपनी पसंदीदा भाषा चुनें',
            searchLanguages: 'भाषाएं खोजें...',
            popularLanguages: 'लोकप्रिय भारतीय भाषाएं',
            allLanguages: 'सभी भारतीय भाषाएं',
            continue: 'जारी रखें',
            languageNote: 'आप किसी भी समय सेटिंग्स में अपनी भाषा प्राथमिकता बदल सकते हैं',
            preview: 'पूर्वावलोकन',
            sampleText: 'नमूना पाठ',
            selectThis: 'इस भाषा को चुनें',
            confirmLanguage: 'भाषा चयन की पुष्टि करें',
            confirmMessage: 'क्या आप वाकई इसे अपनी पसंदीदा भाषा के रूप में सेट करना चाहते हैं?',
            cancel: 'रद्द करें',
            confirm: 'पुष्टि करें',
            signin: 'साइन इन'
        }
    },
    en: {
        name: 'English',
        nativeName: 'English',
        flag: '🇮🇳',
        rtl: false,
        region: 'Pan India',
        speakers: '130M+',
        translations: {
            welcome: 'Welcome to CropGuard AI',
            features: 'AI-powered crop disease detection',
            dashboard: 'Your farming dashboard',
            selectLanguage: 'Select Your Language',
            languageDescription: 'Choose your preferred language to continue with CropGuard AI',
            searchLanguages: 'Search languages...',
            popularLanguages: 'Popular Indian Languages',
            allLanguages: 'All Indian Languages',
            continue: 'Continue',
            languageNote: 'You can change your language preference anytime in settings',
            preview: 'Preview',
            sampleText: 'Sample Text',
            selectThis: 'Select This Language',
            confirmLanguage: 'Confirm Language Selection',
            confirmMessage: 'Are you sure you want to set this as your preferred language?',
            cancel: 'Cancel',
            confirm: 'Confirm',
            signin: 'Sign In'
        }
    },
    bn: {
        name: 'Bengali',
        nativeName: 'বাংলা',
        flag: '🇮🇳',
        rtl: false,
        region: 'West Bengal, Tripura',
        speakers: '97M+',
        translations: {
            welcome: 'CropGuard AI তে স্বাগতম',
            features: 'AI-চালিত ফসলের রোগ সনাক্তকরণ',
            dashboard: 'আপনার কৃষি ড্যাশবোর্ড',
            selectLanguage: 'আপনার ভাষা নির্বাচন করুন',
            languageDescription: 'CropGuard AI এর সাথে চালিয়ে যেতে আপনার পছন্দের ভাষা নির্বাচন করুন',
            searchLanguages: 'ভাষা খুঁজুন...',
            popularLanguages: 'জনপ্রিয় ভারতীয় ভাষা',
            allLanguages: 'সকল ভারতীয় ভাষা',
            continue: 'চালিয়ে যান',
            languageNote: 'আপনি যেকোনো সময় সেটিংসে আপনার ভাষার পছন্দ পরিবর্তন করতে পারেন',
            preview: 'পূর্বরূপ',
            sampleText: 'নমুনা টেক্সট',
            selectThis: 'এই ভাষা নির্বাচন করুন',
            confirmLanguage: 'ভাষা নির্বাচন নিশ্চিত করুন',
            confirmMessage: 'আপনি কি নিশ্চিত যে এটি আপনার পছন্দের ভাষা হিসেবে সেট করতে চান?',
            cancel: 'বাতিল',
            confirm: 'নিশ্চিত',
            signin: 'সাইন ইন'
        }
    },
    te: {
        name: 'Telugu',
        nativeName: 'తెలుగు',
        flag: '🇮🇳',
        rtl: false,
        region: 'Andhra Pradesh, Telangana',
        speakers: '75M+',
        translations: {
            welcome: 'CropGuard AI కి స్వాగతం',
            features: 'AI-ఆధారిత పంట వ్యాధి గుర్తింపు',
            dashboard: 'మీ వ్యవసాయ డ్యాష్‌బోర్డ్',
            selectLanguage: 'మీ భాషను ఎంచుకోండి',
            languageDescription: 'CropGuard AI తో కొనసాగడానికి మీ ఇష్టమైన భాషను ఎంచుకోండి',
            searchLanguages: 'భాషలను వెతకండి...',
            popularLanguages: 'ప్రముఖ భారతీయ భాషలు',
            allLanguages: 'అన్ని భారతీయ భాషలు',
            continue: 'కొనసాగించండి',
            languageNote: 'మీరు ఎప్పుడైనా సెట్టింగ్‌లలో మీ భాష ప్రాధాన్యతను మార్చవచ్చు',
            preview: 'ప్రివ్యూ',
            sampleText: 'నమూనా వచనం',
            selectThis: 'ఈ భాషను ఎంచుకోండి',
            confirmLanguage: 'భాష ఎంపికను నిర్ధారించండి',
            confirmMessage: 'మీరు దీన్ని మీ ఇష్టమైన భాషగా సెట్ చేయాలని మీరు నిజంగా అనుకుంటున్నారా?',
            cancel: 'రద్దు చేయండి',
            confirm: 'నిర్ధారించండి',
            signin: 'సైన్ ఇన్'
        }
    },
    mr: {
        name: 'Marathi',
        nativeName: 'मराठी',
        flag: '🇮🇳',
        rtl: false,
        region: 'Maharashtra, Goa',
        speakers: '72M+',
        translations: {
            welcome: 'CropGuard AI मध्ये आपले स्वागत आहे',
            features: 'AI-आधारित पीक रोग ओळख',
            dashboard: 'तुमचा शेतकी डॅशबोर्ड',
            selectLanguage: 'तुमची भाषा निवडा',
            languageDescription: 'CropGuard AI सह चालू ठेवण्यासाठी तुमची आवडती भाषा निवडा',
            searchLanguages: 'भाषा शोधा...',
            popularLanguages: 'लोकप्रिय भारतीय भाषा',
            allLanguages: 'सर्व भारतीय भाषा',
            continue: 'चालू ठेवा',
            languageNote: 'तुम्ही कधीही सेटिंग्जमध्ये तुमची भाषा प्राधान्य बदलू शकता',
            preview: 'पूर्वावलोकन',
            sampleText: 'नमुना मजकूर',
            selectThis: 'ही भाषा निवडा',
            confirmLanguage: 'भाषा निवडीची पुष्टी करा',
            confirmMessage: 'तुम्हाला खरोखर हे तुमची आवडती भाषा म्हणून सेट करायचे आहे का?',
            cancel: 'रद्द करा',
            confirm: 'पुष्टी करा',
            signin: 'साइन इन'
        }
    },
    ta: {
        name: 'Tamil',
        nativeName: 'தமிழ்',
        flag: '🇮🇳',
        rtl: false,
        region: 'Tamil Nadu, Puducherry',
        speakers: '68M+',
        translations: {
            welcome: 'CropGuard AI க்கு வரவேற்கிறோம்',
            features: 'AI-ஆல் இயங்கும் பயிர் நோய் கண்டறிதல்',
            dashboard: 'உங்கள் விவசாய டாஷ்போர்டு',
            selectLanguage: 'உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்',
            languageDescription: 'CropGuard AI உடன் தொடர உங்கள் விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்',
            searchLanguages: 'மொழிகளைத் தேடுங்கள்...',
            popularLanguages: 'பிரபலமான இந்திய மொழிகள்',
            allLanguages: 'அனைத்து இந்திய மொழிகள்',
            continue: 'தொடரவும்',
            languageNote: 'நீங்கள் எப்போது வேண்டுமானாலும் அமைப்புகளில் உங்கள் மொழி விருப்பத்தை மாற்றலாம்',
            preview: 'முன்னோட்டம்',
            sampleText: 'மாதிரி உரை',
            selectThis: 'இந்த மொழியைத் தேர்ந்தெடுக்கவும்',
            confirmLanguage: 'மொழித் தேர்வை உறுதிப்படுத்தவும்',
            confirmMessage: 'இதை உங்கள் விருப்பமான மொழியாக அமைக்க நீங்கள் நிச்சயமாக விரும்புகிறீர்களா?',
            cancel: 'ரத்து செய்',
            confirm: 'உறுதிப்படுத்து',
            signin: 'உள்நுழை'
        }
    },
    gu: {
        name: 'Gujarati',
        nativeName: 'ગુજરાતી',
        flag: '🇮🇳',
        rtl: false,
        region: 'Gujarat, Dadra & Nagar Haveli',
        speakers: '46M+',
        translations: {
            welcome: 'CropGuard AI માં આપનું સ્વાગત છે',
            features: 'AI-સંચાલિત પાક રોગ શોધ',
            dashboard: 'તમારું ખેતી ડેશબોર્ડ',
            selectLanguage: 'તમારી ભાષા પસંદ કરો',
            languageDescription: 'CropGuard AI સાથે ચાલુ રાખવા માટે તમારી પસંદીદા ભાષા પસંદ કરો',
            searchLanguages: 'ભાષાઓ શોધો...',
            popularLanguages: 'લોકપ્રિય ભારતીય ભાષાઓ',
            allLanguages: 'બધી ભારતીય ભાષાઓ',
            continue: 'ચાલુ રાખો',
            languageNote: 'તમે કોઈપણ સમયે સેટિંગ્સમાં તમારી ભાષા પસંદગી બદલી શકો છો',
            preview: 'પૂર્વાવલોકન',
            sampleText: 'નમુના લખાણ',
            selectThis: 'આ ભાષા પસંદ કરો',
            confirmLanguage: 'ભાષા પસંદગીની પુષ્ટિ કરો',
            confirmMessage: 'શું તમે ખરેખર આને તમારી પસંદીદા ભાષા તરીકે સેટ કરવા માંગો છો?',
            cancel: 'રદ કરો',
            confirm: 'પુષ્ટિ કરો',
            signin: 'સાઇન ઇન'
        }
    },
    kn: {
        name: 'Kannada',
        nativeName: 'ಕನ್ನಡ',
        flag: '🇮🇳',
        rtl: false,
        region: 'Karnataka',
        speakers: '44M+',
        translations: {
            welcome: 'CropGuard AI ಗೆ ಸ್ವಾಗತ',
            features: 'AI-ಚಾಲಿತ ಬೆಳೆ ರೋಗ ಪತ್ತೆ',
            dashboard: 'ನಿಮ್ಮ ಕೃಷಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
            selectLanguage: 'ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
            languageDescription: 'CropGuard AI ಯೊಂದಿಗೆ ಮುಂದುವರಿಯಲು ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
            searchLanguages: 'ಭಾಷೆಗಳನ್ನು ಹುಡುಕಿ...',
            popularLanguages: 'ಜನಪ್ರಿಯ ಭಾರತೀಯ ಭಾಷೆಗಳು',
            allLanguages: 'ಎಲ್ಲಾ ಭಾರತೀಯ ಭಾಷೆಗಳು',
            continue: 'ಮುಂದುವರಿಸಿ',
            languageNote: 'ನೀವು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ಸೆಟ್ಟಿಂಗ್‌ಗಳಲ್ಲಿ ನಿಮ್ಮ ಭಾಷೆಯ ಆದ್ಯತೆಯನ್ನು ಬದಲಾಯಿಸಬಹುದು',
            preview: 'ಪೂರ್ವವೀಕ್ಷಣೆ',
            sampleText: 'ಮಾದರಿ ಪಠ್ಯ',
            selectThis: 'ಈ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
            confirmLanguage: 'ಭಾಷೆ ಆಯ್ಕೆಯನ್ನು ದೃಢೀಕರಿಸಿ',
            confirmMessage: 'ನೀವು ನಿಜವಾಗಿಯೂ ಇದನ್ನು ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯಾಗಿ ಹೊಂದಿಸಲು ಬಯಸುವಿರಾ?',
            cancel: 'ರದ್ದುಮಾಡಿ',
            confirm: 'ದೃಢೀಕರಿಸಿ',
            signin: 'ಸೈನ್ ಇನ್'
        }
    },
    ml: {
        name: 'Malayalam',
        nativeName: 'മലയാളം',
        flag: '🇮🇳',
        rtl: false,
        region: 'Kerala, Lakshadweep',
        speakers: '33M+',
        translations: {
            welcome: 'CropGuard AI-ലേക്ക് സ്വാഗതം',
            features: 'AI-പവർഡ് വിള രോഗ കണ്ടെത്തൽ',
            dashboard: 'നിങ്ങളുടെ കൃഷി ഡാഷ്ബോർഡ്',
            selectLanguage: 'നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക',
            languageDescription: 'CropGuard AI-യുമായി തുടരാൻ നിങ്ങളുടെ ഇഷ്ടമുള്ള ഭാഷ തിരഞ്ഞെടുക്കുക',
            searchLanguages: 'ഭാഷകൾ തിരയുക...',
            popularLanguages: 'ജനപ്രിയ ഇന്ത്യൻ ഭാഷകൾ',
            allLanguages: 'എല്ലാ ഇന്ത്യൻ ഭാഷകളും',
            continue: 'തുടരുക',
            languageNote: 'നിങ്ങൾക്ക് എപ്പോൾ വേണമെങ്കിലും സെറ്റിംഗ്സിൽ നിങ്ങളുടെ ഭാഷാ മുൻഗണന മാറ്റാം',
            preview: 'പ്രിവ്യൂ',
            sampleText: 'സാമ്പിൾ ടെക്സ്റ്റ്',
            selectThis: 'ഈ ഭാഷ തിരഞ്ഞെടുക്കുക',
            confirmLanguage: 'ഭാഷാ തിരഞ്ഞെടുപ്പ് സ്ഥിരീകരിക്കുക',
            confirmMessage: 'ഇത് നിങ്ങളുടെ ഇഷ്ടമുള്ള ഭാഷയായി സെറ്റ് ചെയ്യാൻ നിങ്ങൾ ശരിക്കും ആഗ്രഹിക്കുന്നുണ്ടോ?',
            cancel: 'റദ്ദാക്കുക',
            confirm: 'സ്ഥിരീകരിക്കുക',
            signin: 'സൈൻ ഇൻ'
        }
    },
    pa: {
        name: 'Punjabi',
        nativeName: 'ਪੰਜਾਬੀ',
        flag: '🇮🇳',
        rtl: false,
        region: 'Punjab, Chandigarh',
        speakers: '28M+',
        translations: {
            welcome: 'CropGuard AI ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ',
            features: 'AI-ਸੰਚਾਲਿਤ ਫਸਲ ਦੀ ਬਿਮਾਰੀ ਦੀ ਪਛਾਣ',
            dashboard: 'ਤੁਹਾਡਾ ਖੇਤੀਬਾੜੀ ਡੈਸ਼ਬੋਰਡ',
            selectLanguage: 'ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ',
            languageDescription: 'CropGuard AI ਦੇ ਨਾਲ ਜਾਰੀ ਰੱਖਣ ਲਈ ਆਪਣੀ ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ ਚੁਣੋ',
            searchLanguages: 'ਭਾਸ਼ਾਵਾਂ ਦੀ ਖੋਜ ਕਰੋ...',
            popularLanguages: 'ਪ੍ਰਸਿੱਧ ਭਾਰਤੀ ਭਾਸ਼ਾਵਾਂ',
            allLanguages: 'ਸਾਰੀਆਂ ਭਾਰਤੀ ਭਾਸ਼ਾਵਾਂ',
            continue: 'ਜਾਰੀ ਰੱਖੋ',
            languageNote: 'ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ ਸੈਟਿੰਗਾਂ ਵਿੱਚ ਆਪਣੀ ਭਾਸ਼ਾ ਦੀ ਤਰਜੀਹ ਬਦਲ ਸਕਦੇ ਹੋ',
            preview: 'ਪ੍ਰੀਵਿਊ',
            sampleText: 'ਨਮੂਨਾ ਪਾਠ',
            selectThis: 'ਇਸ ਭਾਸ਼ਾ ਨੂੰ ਚੁਣੋ',
            confirmLanguage: 'ਭਾਸ਼ਾ ਚੋਣ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ',
            confirmMessage: 'ਕੀ ਤੁਸੀਂ ਸੱਚਮੁੱਚ ਇਸਨੂੰ ਆਪਣੀ ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ ਵਜੋਂ ਸੈੱਟ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?',
            cancel: 'ਰੱਦ ਕਰੋ',
            confirm: 'ਪੁਸ਼ਟੀ ਕਰੋ',
            signin: 'ਸਾਇਨ ਇਨ'
        }
    },
    or: {
        name: 'Odia',
        nativeName: 'ଓଡ଼ିଆ',
        flag: '🇮🇳',
        rtl: false,
        region: 'Odisha',
        speakers: '37M+',
        translations: {
            welcome: 'CropGuard AI ରେ ଆପଣଙ୍କୁ ସ୍ୱାଗତ',
            features: 'AI-ଚାଳିତ ଫସଲ ରୋଗ ଚିହ୍ନଟ',
            dashboard: 'ଆପଣଙ୍କ କୃଷି ଡ୍ୟାସବୋର୍ଡ',
            selectLanguage: 'ଆପଣଙ୍କ ଭାଷା ବାଛନ୍ତୁ',
            languageDescription: 'CropGuard AI ସହ ଚାଲୁ ରଖିବା ପାଇଁ ଆପଣଙ୍କ ପସନ୍ଦର ଭାଷା ବାଛନ୍ତୁ',
            searchLanguages: 'ଭାଷାଗୁଡ଼ିକ ଖୋଜନ୍ତୁ...',
            popularLanguages: 'ଲୋକପ୍ରିୟ ଭାରତୀୟ ଭାଷାଗୁଡ଼ିକ',
            allLanguages: 'ସମସ୍ତ ଭାରତୀୟ ଭାଷାଗୁଡ଼ିକ',
            continue: 'ଚାଲୁ ରଖନ୍ତୁ',
            languageNote: 'ଆପଣ ଯେକୌଣସି ସମୟରେ ସେଟିଙ୍ଗରେ ଆପଣଙ୍କ ଭାଷା ପସନ୍ଦ ବଦଳାଇ ପାରିବେ',
            preview: 'ପ୍ରିଭ୍ୟୁ',
            sampleText: 'ନମୁନା ପାଠ୍ୟ',
            selectThis: 'ଏହି ଭାଷା ବାଛନ୍ତୁ',
            confirmLanguage: 'ଭାଷା ଚୟନ ନିଶ୍ଚିତ କରନ୍ତୁ',
            confirmMessage: 'ଆପଣ ପ୍ରକୃତରେ ଏହାକୁ ଆପଣଙ୍କ ପସନ୍ଦର ଭାଷା ଭାବରେ ସେଟ୍ କରିବାକୁ ଚାହୁଁଛନ୍ତି କି?',
            cancel: 'ବାତିଲ୍',
            confirm: 'ନିଶ୍ଚିତ କରନ୍ତୁ',
            signin: 'ସାଇନ୍ ଇନ୍'
        }
    },
    as: {
        name: 'Assamese',
        nativeName: 'অসমীয়া',
        flag: '🇮🇳',
        rtl: false,
        region: 'Assam',
        speakers: '15M+',
        translations: {
            welcome: 'CropGuard AI লৈ আপোনাক স্বাগতম',
            features: 'AI-চালিত শস্য ৰোগ চিনাক্তকৰণ',
            dashboard: 'আপোনাৰ কৃষি ডেছব\'ৰ্ড',
            selectLanguage: 'আপোনাৰ ভাষা বাছনি কৰক',
            languageDescription: 'CropGuard AI ৰ সৈতে আগবাঢ়িবলৈ আপোনাৰ পছন্দৰ ভাষা বাছনি কৰক',
            searchLanguages: 'ভাষাসমূহ বিচাৰক...',
            popularLanguages: 'জনপ্ৰিয় ভাৰতীয় ভাষাসমূহ',
            allLanguages: 'সকলো ভাৰতীয় ভাষা',
            continue: 'আগবাঢ়ক',
            languageNote: 'আপুনি যিকোনো সময়তে ছেটিংছত আপোনাৰ ভাষাৰ পছন্দ সলনি কৰিব পাৰে',
            preview: 'পূৰ্বদৰ্শন',
            sampleText: 'নমুনা পাঠ',
            selectThis: 'এই ভাষা বাছনি কৰক',
            confirmLanguage: 'ভাষা নিৰ্বাচন নিশ্চিত কৰক',
            confirmMessage: 'আপুনি সঁচাকৈয়ে ইয়াক আপোনাৰ পছন্দৰ ভাষা হিচাপে ছেট কৰিব বিচাৰে নেকি?',
            cancel: 'বাতিল কৰক',
            confirm: 'নিশ্চিত কৰক',
            signin: 'ছাইন ইন'
        }
    },
    ur: {
        name: 'Urdu',
        nativeName: 'اردو',
        flag: '🇮🇳',
        rtl: true,
        region: 'Delhi, Uttar Pradesh, Bihar',
        speakers: '52M+',
        translations: {
            welcome: 'CropGuard AI میں آپ کا خوش آمدید',
            features: 'AI پر مبنی فصل کی بیماری کی تشخیص',
            dashboard: 'آپ کا زرعی ڈیش بورڈ',
            selectLanguage: 'اپنی زبان منتخب کریں',
            languageDescription: 'CropGuard AI کے ساتھ جاری رکھنے کے لیے اپنی پسندیدہ زبان منتخب کریں',
            searchLanguages: 'زبانیں تلاش کریں...',
            popularLanguages: 'مقبول ہندوستانی زبانیں',
            allLanguages: 'تمام ہندوستانی زبانیں',
            continue: 'جاری رکھیں',
            languageNote: 'آپ کسی بھی وقت سیٹنگز میں اپنی زبان کی ترجیح تبدیل کر سکتے ہیں',
            preview: 'پیش نظارہ',
            sampleText: 'نمونہ متن',
            selectThis: 'یہ زبان منتخب کریں',
            confirmLanguage: 'زبان کے انتخاب کی تصدیق کریں',
            confirmMessage: 'کیا آپ واقعی اسے اپنی پسندیدہ زبان کے طور پر سیٹ کرنا چاہتے ہیں؟',
            cancel: 'منسوخ کریں',
            confirm: 'تصدیق کریں',
            signin: 'سائن ان'
        }
    },
    mai: {
        name: 'Maithili',
        nativeName: 'मैथिली',
        flag: '🇮🇳',
        rtl: false,
        region: 'Bihar, Jharkhand',
        speakers: '13M+',
        translations: {
            welcome: 'CropGuard AI मे अहाँक स्वागत अछि',
            features: 'AI-संचालित फसल रोग पहचान',
            dashboard: 'अहाँक कृषि डैशबोर्ड',
            selectLanguage: 'अपन भाषा चुनू',
            languageDescription: 'CropGuard AI सँ आगू बढ़बाक लेल अपन पसंदीदा भाषा चुनू',
            searchLanguages: 'भाषा सभ खोजू...',
            popularLanguages: 'लोकप्रिय भारतीय भाषा सभ',
            allLanguages: 'सब भारतीय भाषा सभ',
            continue: 'आगू बढ़ू',
            languageNote: 'अहाँ कहियो सेटिंग मे अपन भाषाक पसंद बदलि सकैत छी',
            preview: 'पूर्वावलोकन',
            sampleText: 'नमूना पाठ',
            selectThis: 'ई भाषा चुनू',
            confirmLanguage: 'भाषा चयनक पुष्टि करू',
            confirmMessage: 'की अहाँ सत्यमे एकरा अपन पसंदीदा भाषाक रूप मे सेट करब चाहैत छी?',
            cancel: 'रद्द करू',
            confirm: 'पुष्टि करू',
            signin: 'साइन इन'
        }
    },
    ne: {
        name: 'Nepali',
        nativeName: 'नेपाली',
        flag: '🇮🇳',
        rtl: false,
        region: 'West Bengal, Sikkim',
        speakers: '2.9M+',
        translations: {
            welcome: 'CropGuard AI मा तपाईंलाई स्वागत छ',
            features: 'AI-संचालित बाली रोग पहिचान',
            dashboard: 'तपाईंको कृषि ड्यासबोर्ड',
            selectLanguage: 'आफ्नो भाषा छान्नुहोस्',
            languageDescription: 'CropGuard AI सँग जारी राख्न आफ्नो मनपर्ने भाषा छान्नुहोस्',
            searchLanguages: 'भाषाहरू खोज्नुहोस्...',
            popularLanguages: 'लोकप्रिय भारतीय भाषाहरू',
            allLanguages: 'सबै भारतीय भाषाहरू',
            continue: 'जारी राख्नुहोस्',
            languageNote: 'तपाईं जुनसुकै बेला सेटिङमा आफ्नो भाषा प्राथमिकता परिवर्तन गर्न सक्नुहुन्छ',
            preview: 'पूर्वावलोकन',
            sampleText: 'नमुना पाठ',
            selectThis: 'यो भाषा छान्नुहोस्',
            confirmLanguage: 'भाषा छनोटको पुष्टि गर्नुहोस्',
            confirmMessage: 'के तपाईं वास्तवमै यसलाई आफ्नो मनपर्ने भाषाको रूपमा सेट गर्न चाहनुहुन्छ?',
            cancel: 'रद्द गर्नुहोस्',
            confirm: 'पुष्टि गर्नुहोस्',
            signin: 'साइन इन'
        }
    },
    sa: {
        name: 'Sanskrit',
        nativeName: 'संस्कृतम्',
        flag: '🇮🇳',
        rtl: false,
        region: 'Classical Language',
        speakers: '25K+',
        translations: {
            welcome: 'CropGuard AI मध्ये भवतां स्वागतम्',
            features: 'AI-चालित कृषि रोग निदानम्',
            dashboard: 'भवतां कृषि फलकम्',
            selectLanguage: 'स्वीयं भाषां चिनुत',
            languageDescription: 'CropGuard AI सह आगे गन्तुं स्वीयं रुचितां भाषां चिनुत',
            searchLanguages: 'भाषाः अन्विष्यताम्...',
            popularLanguages: 'लोकप्रियाः भारतीयाः भाषाः',
            allLanguages: 'सर्वाः भारतीयाः भाषाः',
            continue: 'आगे गच्छत',
            languageNote: 'भवान् कदापि नियन्त्रणेषु स्वीयं भाषा-प्राथमिकतां परिवर्तयितुं शक्नोति',
            preview: 'पूर्वावलोकनम्',
            sampleText: 'नमूना पाठः',
            selectThis: 'इमां भाषां चिनुत',
            confirmLanguage: 'भाषा चयनस्य पुष्टिं करोतु',
            confirmMessage: 'किं भवान् वास्तवे इमां स्वीयं रुचितां भाषां कर्तुम् इच्छति?',
            cancel: 'निरस्यताम्',
            confirm: 'पुष्टिं करोतु',
            signin: 'प्रवेशः'
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    initLanguageSelection();
    setupEventListeners();
    populateLanguages();
    setupSearch();
});

function initLanguageSelection() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && languageData[savedLanguage]) {
        selectedLanguage = savedLanguage;
        // Could redirect to main app here
    }
    
    // Convert language data to array for easier handling
    allLanguages = Object.entries(languageData).map(([code, data]) => ({
        code,
        ...data
    }));
    
    // Add entrance animations
    setTimeout(() => {
        const container = document.querySelector('.language-container');
        container.classList.add('loaded');
    }, 100);
}

function setupEventListeners() {
    const continueBtn = document.getElementById('continueBtn');
    const searchInput = document.getElementById('languageSearch');
    
    continueBtn.addEventListener('click', showConfirmationModal);
    searchInput.addEventListener('input', handleSearch);
    
    // Close modal on outside click
    document.addEventListener('click', function(e) {
        const modal = document.getElementById('confirmationModal');
        if (e.target === modal) {
            closeConfirmation();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
}

function populateLanguages() {
    const languagesGrid = document.getElementById('languagesGrid');
    
    // Create language cards for all languages except popular ones
    const popularLanguageCodes = ['hi', 'en', 'bn', 'te', 'mr', 'ta'];
    const otherLanguages = allLanguages.filter(lang => !popularLanguageCodes.includes(lang.code));
    
    otherLanguages.forEach((language, index) => {
        const card = createLanguageCard(language, false);
        card.style.animationDelay = `${(index * 0.1) + 0.7}s`;
        languagesGrid.appendChild(card);
    });
    
    // Setup popular language cards
    setupPopularLanguageCards();
}

function setupPopularLanguageCards() {
    const popularCards = document.querySelectorAll('.language-card.popular');
    
    popularCards.forEach(card => {
        const langCode = card.dataset.lang;
        const language = languageData[langCode];
        
        if (language) {
            setupLanguageCard(card, { code: langCode, ...language });
        }
    });
}

function createLanguageCard(language, isPopular = false) {
    const card = document.createElement('div');
    card.className = `language-card${isPopular ? ' popular' : ''}`;
    card.dataset.lang = language.code;
    card.dataset.name = language.name;
    
    card.innerHTML = `
        <div class="flag">${language.flag}</div>
        <div class="language-info">
            <h4>${language.nativeName}</h4>
            <span>${language.name}</span>
        </div>
        <div class="selection-indicator">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    `;
    
    setupLanguageCard(card, language);
    return card;
}

function setupLanguageCard(card, language) {
    // Selection handler
    card.addEventListener('click', () => selectLanguage(language.code, card));
    
    // Preview handler (right-click or long press on mobile)
    card.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showLanguagePreview(language);
    });
    
    // Mobile long press for preview
    let pressTimer;
    card.addEventListener('touchstart', (e) => {
        pressTimer = setTimeout(() => {
            showLanguagePreview(language);
            navigator.vibrate && navigator.vibrate(50); // Haptic feedback
        }, 500);
    });
    
    card.addEventListener('touchend', () => {
        clearTimeout(pressTimer);
    });
    
    card.addEventListener('touchmove', () => {
        clearTimeout(pressTimer);
    });
    
    // Preview button
    const previewBtn = document.createElement('button');
    previewBtn.className = 'preview-btn';
    previewBtn.innerHTML = '👁️';
    previewBtn.title = 'Preview this language';
    previewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showLanguagePreview(language);
    });
    
    card.appendChild(previewBtn);
    
    // RTL support
    if (language.rtl) {
        card.classList.add('rtl');
        card.dir = 'rtl';
    }
}

function selectLanguage(languageCode, cardElement) {
    // Update selected language
    selectedLanguage = languageCode;
    
    // Update visual selection
    document.querySelectorAll('.language-card').forEach(card => {
        card.classList.remove('selected');
    });
    cardElement.classList.add('selected');
    
    // Enable continue button
    const continueBtn = document.getElementById('continueBtn');
    continueBtn.disabled = false;
    
    // Add pulse animation to continue button
    continueBtn.classList.add('pulse');
    setTimeout(() => continueBtn.classList.remove('pulse'), 1000);
    
    // Update interface language preview
    updateInterfacePreview(languageCode);
    
    // Save selection temporarily
    sessionStorage.setItem('tempLanguageSelection', languageCode);
    
    // Show success feedback
    showMessage(`${languageData[languageCode].nativeName} selected`, 'success');
}

function updateInterfacePreview(languageCode) {
    const language = languageData[languageCode];
    if (!language) return;
    
    // Update sample elements on the page
    const elementsToUpdate = document.querySelectorAll('[data-i18n]');
    elementsToUpdate.forEach(element => {
        const key = element.dataset.i18n;
        if (language.translations[key]) {
            element.textContent = language.translations[key];
        }
    });
    
    // Update placeholder texts
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        if (language.translations[key]) {
            element.placeholder = language.translations[key];
        }
    });
    
    // Update document direction for RTL languages
    if (language.rtl) {
        document.documentElement.dir = 'rtl';
        document.body.classList.add('rtl');
    } else {
        document.documentElement.dir = 'ltr';
        document.body.classList.remove('rtl');
    }
}

function showLanguagePreview(language) {
    currentPreviewLanguage = language;
    const preview = document.getElementById('languagePreview');
    
    // Update preview content
    document.querySelector('.preview-flag').textContent = language.flag;
    document.getElementById('previewLanguageName').textContent = language.name;
    document.getElementById('previewLanguageNative').textContent = language.nativeName;
    
    // Update sample texts
    document.getElementById('sampleWelcome').textContent = language.translations.welcome;
    document.getElementById('sampleFeatures').textContent = language.translations.features;
    document.getElementById('sampleDashboard').textContent = language.translations.dashboard;
    
    // Show preview
    preview.classList.add('active');
    
    // Add keyboard focus to first focusable element
    const firstFocusable = preview.querySelector('button');
    if (firstFocusable) {
        setTimeout(() => firstFocusable.focus(), 300);
    }
}

function closePreview() {
    const preview = document.getElementById('languagePreview');
    preview.classList.remove('active');
    currentPreviewLanguage = null;
}

function selectPreviewLanguage() {
    if (currentPreviewLanguage) {
        const card = document.querySelector(`[data-lang="${currentPreviewLanguage.code}"]`);
        if (card) {
            selectLanguage(currentPreviewLanguage.code, card);
        }
        closePreview();
    }
}

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    const languageCards = document.querySelectorAll('.language-card');
    
    if (!searchTerm) {
        // Show all cards
        languageCards.forEach((card, index) => {
            card.style.display = 'flex';
            card.style.animation = `slideInUp 0.3s ease-out ${index * 0.05}s both`;
        });
        return;
    }
    
    // Filter and show matching cards
    let visibleCount = 0;
    languageCards.forEach(card => {
        const langCode = card.dataset.lang;
        const langName = card.dataset.name.toLowerCase();
        const language = languageData[langCode];
        const nativeName = language ? language.nativeName.toLowerCase() : '';
        
        const matches = langName.includes(searchTerm) || 
                       nativeName.includes(searchTerm) || 
                       langCode.includes(searchTerm);
        
        if (matches) {
            card.style.display = 'flex';
            card.style.animation = `slideInRight 0.4s ease-out ${visibleCount * 0.05}s both`;
            card.classList.add('search-result');
            visibleCount++;
        } else {
            card.style.display = 'none';
            card.classList.remove('search-result');
        }
    });
    
    // Show "no results" message if needed
    showSearchResults(visibleCount, searchTerm);
}

function showSearchResults(count, searchTerm) {
    const existingMessage = document.querySelector('.search-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    if (count === 0) {
        const message = document.createElement('div');
        message.className = 'search-message';
        message.innerHTML = `
            <div class="no-results">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
                    <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 11H14M11 8V14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <h4>No languages found</h4>
                <p>No languages match "${searchTerm}". Try a different search term.</p>
            </div>
        `;
        document.getElementById('languagesGrid').appendChild(message);
    }
}

function setupSearch() {
    const searchInput = document.getElementById('languageSearch');
    
    // Add search suggestions
    const suggestions = ['hindi', 'bengali', 'telugu', 'marathi', 'tamil', 'gujarati', 'kannada', 'malayalam', 'punjabi', 'urdu'];
    let currentSuggestionIndex = 0;
    
    // Placeholder animation
    function animatePlaceholder() {
        const basePlaceholder = languageData.en.translations.searchLanguages;
        searchInput.placeholder = `${basePlaceholder} (e.g., ${suggestions[currentSuggestionIndex]})`;
        currentSuggestionIndex = (currentSuggestionIndex + 1) % suggestions.length;
    }
    
    // Start placeholder animation
    setInterval(animatePlaceholder, 3000);
    
    // Focus enhancement
    searchInput.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    searchInput.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
}

function showConfirmationModal() {
    if (!selectedLanguage) return;
    
    const modal = document.getElementById('confirmationModal');
    const language = languageData[selectedLanguage];
    
    // Update modal content
    document.querySelector('.confirmation-flag').textContent = language.flag;
    document.getElementById('confirmationLanguageName').textContent = language.name;
    document.getElementById('confirmationLanguageNative').textContent = language.nativeName;
    
    // Show modal
    modal.classList.add('active');
    
    // Focus first button
    const firstBtn = modal.querySelector('button');
    if (firstBtn) {
        setTimeout(() => firstBtn.focus(), 100);
    }
}

function closeConfirmation() {
    const modal = document.getElementById('confirmationModal');
    modal.classList.remove('active');
}

function confirmLanguageSelection() {
    if (!selectedLanguage) return;
    
    // Save language preference
    localStorage.setItem('preferredLanguage', selectedLanguage);
    localStorage.setItem('languageData', JSON.stringify(languageData[selectedLanguage]));
    
    // Show success message
    const languageName = languageData[selectedLanguage].nativeName;
    showMessage(`Language set to ${languageName}! Redirecting...`, 'success');
    
    // Close modal
    closeConfirmation();
    
    // Update continue button
    const continueBtn = document.getElementById('continueBtn');
    continueBtn.innerHTML = 'Loading...';
    continueBtn.disabled = true;
    
    // Redirect to appropriate page
    setTimeout(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const onboardingCompleted = localStorage.getItem('onboardingCompleted');
        
        if (isLoggedIn) {
            window.location.href = '../index.html';
        } else if (onboardingCompleted) {
            window.location.href = 'login.html';
        } else {
            window.location.href = 'register.html';
        }
    }, 1500);
}

function handleKeyboardNavigation(event) {
    const preview = document.getElementById('languagePreview');
    const modal = document.getElementById('confirmationModal');
    
    switch (event.key) {
        case 'Escape':
            if (modal.classList.contains('active')) {
                closeConfirmation();
            } else if (preview.classList.contains('active')) {
                closePreview();
            }
            break;
            
        case 'Enter':
            if (modal.classList.contains('active')) {
                confirmLanguageSelection();
            } else if (selectedLanguage && document.activeElement === document.getElementById('continueBtn')) {
                showConfirmationModal();
            }
            break;
            
        case '/':
            event.preventDefault();
            document.getElementById('languageSearch').focus();
            break;
    }
}

function showMessage(message, type = 'info') {
    const messageElement = document.createElement('div');
    messageElement.className = `message message-${type}`;
    messageElement.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: var(--border-radius);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
        font-weight: 500;
    `;
    
    switch (type) {
        case 'success':
            messageElement.style.background = 'var(--green-main)';
            messageElement.style.color = 'white';
            break;
        case 'warning':
            messageElement.style.background = '#ffaa00';
            messageElement.style.color = 'white';
            break;
        case 'error':
            messageElement.style.background = '#ff4444';
            messageElement.style.color = 'white';
            break;
        default:
            messageElement.style.background = 'var(--secondary-color)';
            messageElement.style.color = 'var(--text-color)';
            messageElement.style.border = '1px solid var(--border-color)';
            break;
    }
    
    messageElement.textContent = message;
    document.body.appendChild(messageElement);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        messageElement.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.remove();
            }
        }, 300);
    }, 3000);
}

// Add required CSS for search message and other animations
const style = document.createElement('style');
style.textContent = `
    .search-message {
        grid-column: 1 / -1;
        text-align: center;
        padding: 3rem;
        animation: fadeIn 0.3s ease-out;
    }
    
    .no-results svg {
        color: var(--text-secondary);
        margin-bottom: 1rem;
    }
    
    .no-results h4 {
        color: var(--text-color);
        margin-bottom: 0.5rem;
        font-weight: 600;
    }
    
    .no-results p {
        color: var(--text-secondary);
    }
    
    .preview-btn {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: var(--secondary-color);
        border: 1px solid var(--border-color);
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: all 0.3s ease;
        cursor: pointer;
        font-size: 14px;
    }
    
    .language-card:hover .preview-btn {
        opacity: 1;
    }
    
    .preview-btn:hover {
        background: var(--green-main);
        color: white;
        border-color: var(--green-main);
    }
    
    @keyframes slideInRight {
        from { opacity: 0; transform: translateX(100px); }
        to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes slideOutRight {
        from { opacity: 1; transform: translateX(0); }
        to { opacity: 0; transform: translateX(100px); }
    }
`;
document.head.appendChild(style);

// Export functions for testing
window.languageFunctions = {
    selectLanguage,
    showLanguagePreview,
    confirmLanguageSelection,
    updateInterfacePreview,
    showMessage
};