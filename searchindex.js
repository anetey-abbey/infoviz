Search.setIndex({"docnames": ["docs/data_preprocessing", "docs/notebook"], "filenames": ["docs/data_preprocessing.ipynb", "docs/notebook.ipynb"], "titles": ["Data Preprocessing", "The digital divide and its interplay with societal factors"], "terms": {"import": 1, "packag": [0, 1], "panda": 1, "pd": [0, 1], "plotli": [0, 1], "express": [0, 1], "px": [0, 1], "graph_object": [0, 1], "go": [0, 1], "seaborn": [0, 1], "sn": [0, 1], "matplotlib": [0, 1], "pyplot": [0, 1], "plt": [0, 1], "countri": 1, "get": 1, "code": [0, 1], "order": 1, "differenti": [], "from": [0, 1], "group": [0, 1], "e": [], "g": 1, "europ": [0, 1], "thi": [0, 1], "contain": [0, 1], "meta": 0, "df_countrydata": 0, "read_csv": 0, "wdicountri": 0, "csv": [0, 1], "sep": 0, "df": [0, 1], "wdidata": [0, 1], "drop": [0, 1], "unnam": 0, "66": 0, "axi": [0, 1], "filter": 1, "keep": 0, "onli": [0, 1], "relev": 1, "variabl": [0, 1], "selected_ind": 0, "gdp": [0, 1], "annual": 0, "individu": [0, 1], "us": 1, "internet": 0, "popul": [0, 1], "foreign": 0, "direct": [0, 1], "invest": [0, 1], "net": [0, 1], "inflow": 0, "bop": [0, 1], "current": [0, 1], "gni": [0, 1], "per": [0, 1], "capita": [0, 1], "ppp": [0, 1], "intern": [0, 1], "school": [0, 1], "enrol": 0, "secondari": 0, "indic": 1, "name": [0, 1], "isin": [0, 1], "head": 0, "1960": 1, "1961": [], "1962": [], "1963": [], "1964": [], "1965": [], "2012": 1, "2013": [], "2014": 1, "2015": [], "2016": [], "2017": [], "2018": [], "2019": 1, "2020": [0, 1], "2021": [0, 1], "455": [], "africa": [0, 1], "eastern": 0, "southern": 0, "af": 0, "c": 1, "bx": [], "klt": [], "dinv": [], "cd": [], "wd": [], "nan": [0, 1], "463634e": [], "10": [0, 1], "153424e": [], "768142e": [], "877423e": [], "663278e": [], "003544e": [], "359147e": [], "382234e": [], "257987e": [], "470": [], "ny": [], "mktp": [], "kd": [], "zg": [], "0": [0, 1], "239594": [], "7": [0, 1], "980768": [], "5": [0, 1], "164334": [], "4": [0, 1], "579952": [], "327717": [], "9": [0, 1], "230672e": [], "01": [], "200209e": [], "00": [], "984387e": [], "952845e": [], "217017e": [], "557135e": [], "485244e": [], "025941e": [], "886856e": [], "303667": [], "row": [0, 1], "column": 1, "For": 1, "effect": 1, "analysi": 1, "we": [0, 1], "need": 0, "wide": 1, "format": 1, "df_long": 0, "melt": 0, "id_var": 0, "var_nam": 0, "year": [0, 1], "value_nam": 0, "valu": [0, 1], "df_wide": 1, "pivot_t": 0, "index": [0, 1], "aggfunc": 0, "first": [0, 1], "reset_index": [0, 1], "astyp": [0, 1], "int": 0, "botswana": 0, "bwa": [], "burundi": 0, "bdi": [], "grenada": 0, "grd": [], "maldiv": 0, "mdv": [], "syrian": 0, "arab": 0, "republ": [0, 1], "syr": [], "13611": [], "west": [0, 1], "bank": 0, "gaza": 0, "pse": 0, "050451": [], "7370": [], "13612": [], "yemen": 0, "rep": 0, "yem": 0, "061513": [], "13613": [], "serbia": 0, "srb": [], "389271": [], "20610": [], "13614": [], "montenegro": 0, "mne": [], "12": [0, 1], "434359": [], "23280": [], "13615": [], "kosovo": 0, "xkx": [], "127578": [], "13010": [], "13616": [], "8": [0, 1], "heatmap": 1, "isnul": [], "cbar": [], "fals": 1, "ax": [], "xlabel": 1, "most": [0, 1], "time": [0, 1], "all": [0, 1], "thu": [0, 1], "out": 1, "non": 1, "incom": [0, 1], "notna": 0, "country_cod": 0, "uniqu": [0, 1], "df_all_countri": 1, "check": 1, "na": [], "have": 1, "an": 1, "section": 1, "describ": 1, "topic": 1, "The": 0, "phenomenon": 1, "how": [0, 1], "rise": 1, "technolog": 1, "result": 1, "inequ": [], "between": 1, "societi": 1, "due": 1, "unequ": 1, "access": 0, "applianc": [], "servic": [0, 1], "benefit": 1, "reap": [], "those": 1, "motiv": [], "curios": [], "influenc": 1, "societ": [], "factor": [], "aspir": [], "explor": 1, "its": [], "interplai": [], "ani": 1, "exacerb": [], "reliev": [], "can": 1, "found": [], "provid": 1, "inform": [0, 1], "about": 1, "where": 1, "download": [], "them": [], "what": 1, "ar": 1, "also": 1, "explain": 1, "you": 1, "world": [0, 1], "develop": 0, "elabor": 1, "collect": 1, "global": 1, "rang": [0, 1], "divers": 1, "cover": 1, "socio": 1, "demograph": 1, "environment": 1, "domain": 1, "It": 1, "encompass": 1, "total": [0, 1], "1442": 1, "featur": 1, "within": 1, "life": [], "expect": [], "birth": [], "unemploy": 1, "rate": [0, 1], "literaci": [0, 1], "includ": 1, "266": 1, "differ": 1, "frame": 1, "61": [0, 1], "2000": [], "valuabl": 1, "resourc": 1, "pattern": 1, "http": [0, 1], "www": 1, "kaggl": 1, "com": 1, "psycon": 1, "select": 1, "text": 1, "here": 1, "think": [], "increas": 1, "more": 1, "greater": 1, "possibl": 1, "expand": 1, "versu": [0, 1], "less": 1, "mobil": 0, "phone": [], "connect": 1, "ha": 1, "big": [], "impact": [], "both": 1, "avail": 1, "why": [], "instanc": 1, "see": [0, 1], "correl": 1, "variou": 1, "measur": 1, "percentag": 1, "engag": 1, "higher": 1, "lead": [], "tendenc": [], "chose": 1, "becaus": [0, 1], "curiou": [], "democrat": [], "eros": [], "good": [0, 1], "potenti": [], "few": [], "scientif": [], "sourc": 1, "operation": [], "seem": 1, "regular": [], "pace": [], "wld": 0, "bar": [], "color": 1, "skyblu": [], "edgecolor": [], "darkblu": [], "titl": 1, "usag": 1, "fontsiz": 1, "14": 1, "ylabel": 1, "ylim": [], "100": [0, 1], "grid": 1, "y": 1, "alpha": [], "75": [], "show": 1, "howev": 1, "enorm": [], "part": [0, 1], "country_group": 1, "oecd": 1, "member": 1, "sub": [0, 1], "saharan": [0, 1], "df_group": 1, "group_data": 1, "plot": 1, "marker": 1, "o": 1, "linestyl": 1, "label": 1, "trend": 1, "over": 1, "legend": 1, "true": [0, 1], "map": [0, 1], "follow": 1, "df_map": 1, "start_year": 1, "1990": [0, 1], "end_year": 1, "fig": 1, "figur": [], "sort": 1, "ascend": 1, "add": 1, "trace": 1, "each": [], "df_year": 1, "add_trac": 1, "choropleth": 1, "locat": 1, "z": 1, "locationmod": 1, "visibl": 1, "zmin": 1, "zmax": 1, "colorscal": 1, "red": 1, "green": [], "colorbar_titl": 1, "str": [0, 1], "step": 1, "i": 1, "len": 1, "dict": 1, "method": [0, 1], "restyl": 1, "arg": 1, "append": 1, "find": 1, "active_index": 1, "slider": 1, "activ": 1, "currentvalu": 1, "prefix": 1, "update_layout": 1, "user": 1, "geo": 1, "showfram": 1, "showcoastlin": 1, "scope": 1, "could": 1, "plai": 1, "role": [], "speed": 1, "across": [], "There": [], "strong": 1, "relat": [0, 1], "df_2020": [], "scatter": 1, "blue": 1, "vs": 1, "loc": 0, "upper": 0, "left": [0, 1], "been": 1, "quick": 1, "high": [0, 1], "df_anim": 1, "dropna": 1, "x": 1, "animation_fram": 1, "animation_group": 1, "size": 1, "hover_nam": 1, "range_i": 1, "min": 1, "max": 1, "update_xax": 1, "updatemenu": 1, "type": [0, 1], "button": 1, "showact": 1, "anim": 1, "none": 1, "durat": [0, 1], "500": 1, "redraw": 1, "paus": 1, "mode": 1, "immedi": 1, "some": 1, "info": [], "franc": 0, "mozambiqu": 0, "zambia": 0, "chad": 0, "sierra": 0, "leon": 0, "last": [], "decad": [], "feedback": 1, "your": [], "ta": 1, "peer": 1, "help": [], "improv": 1, "stori": 1, "among": 1, "team": 1, "who": 1, "respons": [], "period": 0, "list": [0, 1], "1991": [], "1992": [], "1993": [], "1994": [], "1995": [], "2011": [], "867306e": [], "07": 0, "241969e": [], "09": 0, "6": [0, 1], "523250e": [], "08": 0, "395097e": [], "187865e": [], "662959e": [], "753870e": [], "967731e": [], "02": [], "053010e": [], "979118e": [], "923001e": [], "025857e": [], "290760e": [], "680870e": [], "35": 0, "afghanistan": 0, "afg": 0, "000000e": [], "000000": 0, "039677": [], "1728": [], "988230": [], "western": [0, 1], "central": 0, "afw": 0, "073308e": [], "562870": [], "1634": [], "638706": [], "albania": 0, "alb": 0, "575640": [], "2550": [], "algeria": 0, "dza": 0, "349146e": [], "05": [0, 1], "800001": [], "6660": [], "8020": [], "273410e": [], "15": [0, 1], "306894": [], "20310": [], "77": 0, "608793": [], "8021": [], "curacao": 0, "cuw": [], "581493e": [], "18": 1, "438470": [], "21480": [], "8022": [], "946253e": [], "340275": [], "11570": [], "8023": [], "sint": 0, "maarten": 0, "dutch": 0, "sxm": [], "669263e": [], "8024": [], "south": [0, 1], "sudan": 0, "ssd": [], "750000e": [], "500000": [], "8025": [], "sinc": 1, "invent": 1, "1983": 1, "still": 1, "rel": [], "novel": 1, "adopt": 1, "peopl": [0, 1], "s": [0, 1], "daili": 1, "live": 1, "welcom": [], "open": [], "arm": [], "greatli": [], "enjoi": [], "mani": 1, "onlin": [], "effici": 1, "just": 1, "so": 1, "much": [], "start": [], "taken": 1, "grant": [], "would": 1, "clich\u00e9": [], "sai": 1, "past": [], "centuri": [], "acceler": [], "process": 1, "interconnect": [], "natur": 1, "gain": 1, "abl": 1, "myriad": 1, "advantag": 1, "economi": 1, "especi": 1, "hemispher": 1, "thrive": 1, "leverag": 1, "product": 1, "widespread": 1, "convers": 1, "unabl": 1, "exclud": 1, "emerg": 1, "depriv": 1, "present": 1, "well": 1, "domest": [0, 1], "scholar": 1, "coin": 1, "khiabani": 1, "2003": 1, "now": 1, "forti": 1, "later": 1, "write": 1, "made": [0, 1], "number": 1, "other": [], "human": 1, "while": 1, "steadili": 1, "expert": 1, "argu": 1, "ever": [], "muller": 1, "aguiar": 1, "2022": 1, "moreov": 1, "had": 1, "investig": [], "through": 1, "specif": 1, "phenomena": [], "affect": 1, "sector": [], "want": [], "insight": 1, "prosper": 1, "broadli": [], "speak": [], "qualiti": [0, 1], "approach": [], "statsmodel": [0, 1], "api": [0, 1], "sm": [0, 1], "numpi": [0, 1], "np": [0, 1], "attain": [0, 1], "least": [0, 1], "bachelor": [0, 1], "equival": [0, 1], "25": [0, 1], "cumul": [0, 1], "complet": [0, 1], "primari": [0, 1], "master": [0, 1], "doctor": 0, "govern": 0, "expenditur": 0, "pupil": 0, "adjust": [0, 1], "save": [0, 1], "compulsori": 0, "secur": 0, "server": 0, "fix": [0, 1], "telephon": 0, "subscript": 0, "electr": 0, "ict": [0, 1], "export": 1, "cellular": 0, "lower": [0, 1], "tertiari": 0, "gross": [0, 1], "youth": 0, "ag": [0, 1], "24": [0, 1], "adult": 0, "abov": [0, 1], "eg": [], "elc": [], "acc": [], "zs": [], "29": [], "089827": [], "31": [], "844384": [], "794160": [], "32": [], "001027": [], "33": [], "871910": [], "38": [], "880173": [], "40": 0, "261358": [], "43": 0, "061877": [], "44": [0, 1], "270860": [], "45": 1, "803485": [], "36": 0, "adj": [], "aedu": [], "gn": [], "426717": 0, "882468": [], "162041": [], "071125": [], "04343": [], "990009": [], "755062": [], "878013": [], "563364": [], "510963": [], "433471": [], "355900": [], "442274": [], "692845": [], "791304": [], "710650": [], "953448": 0, "041420": [], "849960": 0, "211410": 0, "182340": 0, "880000e": [], "03": 0, "002587": [], "615379": 0, "800000": 0, "674630e": 0, "99": [], "451752": [], "90": [0, 1], "081741": 0, "366360": 0, "475074": 0, "946261": 0, "957000e": 0, "700000e": [], "001825": [], "92": 1, "593437": [], "59": 0, "414188": 0, "293140": 0, "2162469": 0, "8206": [], "26999": 0, "21": [0, 1], "708691": 0, "94667": 0, "232353": [], "274119e": [], "06": 0, "83": [], "783026": [], "96": [], "427193": [], "91": [0, 1], "027290": 0, "097672": 0, "806276": 0, "2573": 0, "8207": 0, "521569": 0, "872891": 0, "883980": [], "265682e": [], "106": [], "152775": [], "102": 1, "407066": [], "76": 0, "750740": 0, "244061": 0, "613156032": 0, "89189073": 0, "8208": 0, "73": 0, "757927": 0, "600000": 0, "517800e": [], "50": [0, 1], "888548": [], "169": 0, "8209": 0, "zmb": 0, "524475": 0, "563864": 0, "273000e": 0, "910421e": [], "103": 1, "917835": [], "745": 0, "8210": 0, "zimbabw": 0, "zwe": 0, "52": 0, "747669": 0, "910000": 0, "333000e": 0, "319171e": [], "88": [], "755806": [], "97": [], "304909": [], "1107": 0, "8211": 0, "caption": 1, "exhibit": [], "repres": 1, "inidividu": [], "assum": [], "origin": 1, "datafram": [0, 1], "replac": [0, 1], "inplac": 0, "convert": [0, 1], "numer": 0, "to_numer": 0, "error": [0, 1], "coerc": 0, "miss": [0, 1], "median": 1, "preced": 1, "succeed": 1, "df_all_countries_clean": 1, "appli": 1, "lambda": [], "fillna": [], "interpol": 1, "linear": [0, 1], "verifi": [], "sum": [], "print": [0, 1], "No": [], "els": [], "df_all_countries_clean_2020": 1, "2010": 1, "copi": [0, 1], "tmp": [], "ipykernel_8789": [], "1661217369": [], "py": 0, "settingwithcopywarn": 0, "A": [0, 1], "try": 0, "set": [0, 1], "slice": 0, "caveat": 0, "document": 0, "pydata": 0, "org": [0, 1], "doc": [0, 1], "stabl": 0, "user_guid": 0, "html": [0, 1], "return": 0, "view": [0, 1], "row_index": 0, "col_index": 0, "instead": [0, 1], "connectivti": [], "country_dict": [], "asia": [0, 1], "american": 0, "samoa": 0, "oceania": [0, 1], "andorra": 0, "angola": 0, "antigua": 0, "barbuda": 0, "north": [0, 1], "america": [0, 1], "argentina": 0, "armenia": 0, "aruba": 0, "australia": 0, "austria": 0, "azerbaijan": 0, "bahrain": 0, "bangladesh": [0, 1], "barbado": 0, "belaru": 0, "belgium": 0, "beliz": 0, "benin": 0, "bermuda": 0, "bhutan": 0, "bolivia": 0, "bosnia": 0, "herzegovina": 0, "brazil": 0, "british": 0, "virgin": 0, "island": 0, "brunei": 0, "darussalam": 0, "bulgaria": 0, "burkina": [0, 1], "faso": [0, 1], "cabo": 0, "verd": 0, "cambodia": 0, "cameroon": 0, "canada": 0, "cayman": 0, "african": [0, 1], "chile": 0, "china": [0, 1], "colombia": 0, "comoro": 0, "costa": 0, "rica": 0, "croatia": 0, "cuba": 0, "cypru": 0, "czech": [0, 1], "denmark": 0, "djibouti": 0, "dominica": 0, "dominican": 0, "ecuador": 0, "el": 0, "salvador": 0, "equatori": 0, "guinea": 0, "eritrea": 0, "estonia": 0, "eswatini": 0, "ethiopia": 0, "faro": 0, "fiji": 0, "finland": 0, "french": 0, "polynesia": 0, "gabon": 0, "georgia": [0, 1], "germani": 0, "ghana": 0, "gibraltar": 0, "greec": 0, "greenland": 0, "guam": 0, "guatemala": 0, "bissau": 0, "guyana": 0, "haiti": 0, "hondura": 0, "hungari": 0, "iceland": 0, "india": 0, "indonesia": [0, 1], "iraq": 0, "ireland": 0, "isl": 0, "man": 0, "israel": 0, "itali": 0, "jamaica": 0, "japan": 0, "jordan": 0, "kazakhstan": 0, "kenya": 0, "kiribati": 0, "kuwait": 0, "kyrgyz": 0, "latvia": 0, "lebanon": 0, "lesotho": 0, "liberia": 0, "libya": 0, "liechtenstein": 0, "lithuania": 0, "luxembourg": 0, "madagascar": [0, 1], "malawi": 0, "malaysia": 0, "mali": 0, "malta": 0, "marshal": 0, "mauritania": 0, "mauritiu": 0, "mexico": 0, "moldova": 0, "monaco": 0, "mongolia": 0, "morocco": 0, "myanmar": 0, "namibia": 0, "nauru": 0, "nepal": 0, "netherland": 0, "new": 1, "caledonia": 0, "zealand": 0, "nicaragua": 0, "niger": 0, "nigeria": 0, "macedonia": 0, "northern": 0, "mariana": 0, "norwai": [0, 1], "oman": 0, "pakistan": 0, "palau": 0, "panama": 0, "papua": 0, "paraguai": 0, "peru": 0, "philippin": 0, "poland": 0, "portug": 0, "puerto": 0, "rico": 0, "qatar": 0, "romania": 0, "russian": 0, "feder": 0, "rwanda": [0, 1], "san": 0, "marino": 0, "sao": 0, "tome": 0, "princip": 0, "saudi": 0, "arabia": 0, "seneg": [0, 1], "seychel": 0, "singapor": 0, "slovak": 0, "slovenia": 0, "solomon": 0, "somalia": 0, "spain": 0, "sri": 0, "lanka": 0, "st": 0, "kitt": 0, "nevi": 0, "lucia": 0, "surinam": 0, "sweden": [0, 1], "switzerland": 0, "tajikistan": 0, "tanzania": 0, "thailand": 0, "togo": 0, "tonga": 0, "trinidad": 0, "tobago": 0, "tunisia": 0, "turkmenistan": 0, "turk": 0, "caico": 0, "tuvalu": 0, "uganda": 0, "ukrain": 0, "unit": [0, 1], "emir": 0, "kingdom": [0, 1], "state": [0, 1], "uruguai": 0, "uzbekistan": 0, "vanuatu": 0, "vietnam": 0, "background": 1, "background_color": 1, "rgba": 1, "242": 1, "255": 1, "contin": [], "continent_color": [], "67": [0, 1], "111": 1, "154": 1, "203": [], "desir": 1, "df_all_countries_clean_year": [], "sort_valu": [], "creat": 1, "base": 1, "chart": 1, "legendgroup": [], "showlegend": [], "layout": 1, "plot_bgcolor": 1, "xaxis_titl": 1, "yaxis_titl": 1, "br": 1, "orient": 1, "h": [], "yanchor": 1, "bottom": [], "xanchor": 1, "right": 1, "font": 1, "items": [], "constant": [], "bgcolor": 1, "bordercolor": [], "borderwidth": [], "traceord": [], "revers": [], "itemclick": [], "item": [], "displai": 1, "altough": [], "broad": [], "focu": 1, "primarli": [], "If": 1, "look": 1, "case": 1, "europa": [], "clear": 1, "argument": [], "european": [], "mainli": [], "maini": [], "arguemnt": [], "142": [], "academ": [], "dropdown": 1, "tolist": 1, "dropdown_button": 1, "updat": 1, "_": 1, "color_secondari": 1, "213": 1, "93": 1, "color_tertiari": 1, "df_filter": 1, "empti": 1, "continu": 1, "round": 1, "hovertempl": 1, "calcul": 1, "line": 1, "add_const": 1, "model_secondari": 1, "ol": 1, "results_secondari": 1, "fit": 1, "fittedvalu": 1, "model_tertiari": 1, "results_tertiari": 1, "initi": 1, "properti": 1, "down": 1, "55": 1, "add_annot": 1, "xref": 1, "paper": 1, "yref": 1, "showarrow": 1, "disclaim": [], "than": 1, "doe": 1, "restrict": 1, "make": 1, "graph": 1, "inclus": 1, "havo": [], "vwo": [], "etc": [], "upward": 1, "posit": 1, "mean": 1, "hbo": [], "univers": 1, "As": 1, "becom": 1, "easier": 1, "naidoo": 1, "raju": 1, "j": 1, "42": [], "intertwin": 1, "contribut": 1, "caus": 1, "bigger": [], "experi": 1, "tien": 1, "d": [0, 1], "2002": 1, "216": [], "minim": [], "educationi": [], "opportun": 1, "against": 1, "sun": [], "metro": [], "159": [], "whether": [], "perform": [0, 1], "student": 1, "filenotfounderror": [], "traceback": [], "recent": [], "call": 1, "cell": [], "In": 1, "file": [], "opt": [], "anaconda3": [], "lib": [], "python3": [], "site": [], "util": [], "_decor": [], "211": [], "deprecate_kwarg": [], "local": [], "_deprecate_kwarg": [], "wrapper": [], "kwarg": [], "209": [], "210": [], "new_arg_nam": [], "new_arg_valu": [], "func": [], "331": [], "deprecate_nonkeyword_argu": [], "decor": [], "325": [], "num_allow_arg": [], "326": [], "warn": [], "327": [], "msg": [], "_format_argument_list": [], "allow_arg": [], "328": [], "futurewarn": [], "329": [], "stacklevel": [], "find_stack_level": [], "330": [], "io": [0, 1], "parser": [], "reader": [], "950": [], "filepath_or_buff": [], "delimit": [], "header": [], "index_col": [], "usecol": [], "squeez": [], "mangle_dupe_col": [], "dtype": [], "engin": 1, "true_valu": [], "false_valu": [], "skipinitialspac": [], "skiprow": [], "skipfoot": [], "nrow": [], "na_valu": [], "keep_default_na": [], "na_filt": [], "verbos": [], "skip_blank_lin": [], "parse_d": [], "infer_datetime_format": [], "keep_date_col": [], "date_pars": [], "dayfirst": [], "cache_d": [], "iter": [], "chunksiz": [], "compress": [], "thousand": [], "decim": [], "linetermin": [], "quotechar": [], "quot": [], "doublequot": [], "escapechar": [], "comment": [], "encod": [], "encoding_error": [], "dialect": [], "error_bad_lin": [], "warn_bad_lin": [], "on_bad_lin": [], "delim_whitespac": [], "low_memori": [], "memory_map": [], "float_precis": [], "storage_opt": [], "935": [], "kwds_default": [], "_refine_defaults_read": [], "936": [], "937": [], "946": [], "default": 1, "947": [], "948": [], "kwd": [], "_read": [], "605": [], "602": [], "_validate_nam": [], "604": [], "textfileread": [], "607": [], "608": [], "__init__": [], "self": 1, "f": [], "1439": [], "option": [], "has_index_nam": [], "1441": [], "handl": 1, "iohandl": [], "_engin": [], "_make_engin": [], "1735": [], "1733": [], "b": 1, "1734": [], "get_handl": [], "1736": [], "1737": [], "1738": [], "1739": [], "1740": [], "1741": [], "is_text": [], "1742": [], "strict": [], "1743": [], "1744": [], "1745": [], "assert": [], "1746": [], "common": 0, "856": [], "path_or_buf": [], "851": [], "elif": [], "isinst": [], "852": [], "filenam": [], "binari": [], "853": [], "support": 1, "newlin": [], "854": [], "ioarg": [], "855": [], "857": [], "858": [], "859": [], "860": [], "861": [], "862": [], "863": [], "864": [], "865": [], "errno": [], "directori": [], "ipykernel_4175": [], "var": 0, "folder": 0, "v9": 0, "_3m9v4153zx32g3v3h3vvfp00000gn": 0, "t": [0, 1], "ipykernel_53094": [], "remov": 1, "chained_assign": [], "3": [0, 1], "sketch": [], "finish": [], "204": 1, "221": 1, "131": 1, "enumer": 1, "timefram": 1, "three": 1, "region": [0, 1], "polit": 1, "stabil": 1, "larg": 1, "two": 1, "were": [0, 1], "reduc": 1, "wa": [0, 1], "smaller": 1, "secondli": 1, "certain": 1, "amount": 1, "unnecessari": 1, "To": 1, "eas": 1, "dure": 1, "transform": 1, "everi": 1, "separ": 1, "wai": 1, "interpret": 1, "final": 1, "remain": 1, "duplic": 1, "workabl": 1, "structur": 1, "mai": 1, "firstli": 1, "relationship": 1, "link": 1, "declin": 1, "suspect": 1, "compar": 1, "commonli": 1, "gener": [], "resid": 1, "situat": 1, "nation": [0, 1], "abroad": 1, "therefor": 1, "illustr": 1, "financi": 1, "degre": 1, "gap": 1, "occur": 1, "low": [0, 1], "143": 1, "dot": 1, "correspond": 1, "colour": 1, "accentu": 1, "progress": 1, "simultan": 1, "portrai": 1, "larger": 1, "evolut": 1, "clearli": [], "cours": 1, "seen": 1, "extent": 1, "further": 1, "therebi": [], "suggest": 1, "inde": [], "pearson": 1, "r": [0, 1], "after": 1, "statist": 1, "These": 1, "highlight": 1, "augment": [], "begin": 1, "befor": 1, "except": 1, "one": 1, "below": 1, "50k": 1, "dollar": 1, "At": 1, "end": 1, "pass": 1, "boundari": 1, "which": 1, "80": 1, "claim": 1, "enhanc": [], "studi": 1, "farhadi": 1, "m": 1, "fooladi": [], "commun": 1, "magnifi": [], "On": 1, "hand": 1, "impli": 1, "wealth": [], "again": [], "success": [], "evid": 1, "domin": [], "commerc": [], "massiv": [], "chunk": [], "murthi": 1, "k": 1, "v": 1, "kalsi": 1, "shankar": 1, "transnat": 1, "corpor": 1, "review": 1, "13": 1, "aris": [], "simpli": [], "possess": [], "power": [], "tool": 1, "opac": 1, "xaxi": 1, "showgrid": 1, "gridcolor": 1, "white": 1, "gridwidth": 1, "zerolin": 1, "zerolinecolor": 1, "zerolinewidth": 1, "yaxi": 1, "tren": [], "move": 1, "along": 1, "almost": 1, "primarili": [], "trendlin": 1, "characterist": 1, "dataset": [], "data": 1, "wdi": 1, "1": [0, 1], "growth": 0, "educ": 0, "2": [0, 1], "github": [0, 1], "anetei": [0, 1], "abbei": [0, 1], "infoviz": [0, 1], "git": [0, 1], "notebook": [0, 1], "34": 1, "ai": 1, "reason": 1, "promt": 1, "2023": 1, "free": 1, "version": 1, "gpt": 1, "whole": 1, "serv": 1, "basi": 1, "exampl": 1, "df_main": 1, "small": 1, "correct": 1, "facilit": 1, "creation": 1, "uva": [], "requir": 1, "do": 1, "lot": [], "research": 0, "up": 1, "decid": 1, "project": 1, "allow": 1, "hopefulli": 1, "better": 1, "deliver": 1, "hindsight": 1, "did": 1, "alwai": 1, "prove": 1, "useful": 1, "either": 1, "bceaus": [], "got": 1, "long": 1, "chang": 1, "too": 1, "offer": 1, "solut": 1, "syllabu": 1, "said": 1, "refer": [], "date": 1, "prompt": 1, "length": 1, "That": 1, "specifii": 1, "gotten": 1, "previou": 1, "assign": 1, "yet": 1, "put": [0, 1], "transpar": 1, "even": 1, "thei": 1, "yield": 1, "littl": 1, "19": 1, "remak": 1, "rewrit": 1, "function": [], "point": 1, "paper_bgcolor": 1, "update_trac": 1, "hover_data": 1, "selected_countri": 1, "df_selected_countri": 1, "custom": 1, "shown": 1, "onc": 1, "combin": 1, "224": 1, "ustom": 1, "add_scatt": 1, "hovertext": 1, "selector": 1, "scatterplot": 1, "usin": 1, "backgroud": 1, "color_primari": 1, "give": 1, "bad": 1, "path": 1, "tracer": 1, "Will": 1, "mark": 1, "paramet": 1, "df_all_countries_2020": 1, "surfac": 1, "3d": 1, "pad": 1, "top": 1, "annot": 1, "085": 1, "align": 1, "menu": 1, "specifi": 1, "accordingli": 1, "let": 1, "me": 1, "when": 1, "click": 1, "should": 1, "don": 1, "tell": 1, "barchart": [], "thee": [], "python": [0, 1], "color_countri": [], "sampl": [], "65": [], "pycountry_convert": 0, "pc": [], "def": [], "country_to_contin": [], "country_nam": 1, "country_alpha2": [], "country_name_to_country_alpha2": [], "country_continent_cod": [], "country_alpha2_to_continent_cod": [], "country_continent_nam": [], "convert_continent_code_to_continent_nam": [], "entri": [], "take": 1, "run": [], "dictionari": [], "226": [], "229": [], "238": [], "170": [], "186": [], "200": [], "rgb": [], "227": [], "11": [0, 1], "random": [], "27": [], "thsi": [], "testxfu": [], "join": [0, 1], "merg": [], "amp": 0, "middl": [0, 1], "east": [0, 1], "region_color": 1, "223": [], "162": [], "163": [], "215": [], "51": [], "177": [], "184": [], "190": [], "245": [], "249": [], "250": [], "color_discrete_sequ": 1, "width": 1, "darkslategrei": [], "Of": 1, "colorbar": 1, "thick": 1, "transit": 1, "300": 1, "cubic": 1, "activebgcolor": 1, "center": 1, "20": 1, "earth": 1, "lat": 1, "lon": 1, "autos": 1, "height": 1, "400": [], "margin": 1, "l": 1, "750": [], "area": 1, "update_yax": 1, "black": 1, "17": 1, "pickl": [], "datatyp": 0, "preserv": 0, "to_pickl": 0, "pkl": [0, 1], "read_pickl": 1, "nameerror": [], "defin": 1, "visual": 1, "miniconda3": [], "env": [], "jupyterbook": [], "912": [], "date_format": [], "dtype_backend": [], "899": [], "900": [], "901": [], "908": [], "909": [], "910": [], "577": [], "574": [], "576": [], "579": [], "580": [], "1407": [], "1404": [], "1406": [], "1661": [], "1659": [], "1660": [], "1662": [], "1663": [], "1664": [], "1665": [], "1666": [], "1667": [], "1668": [], "1669": [], "1670": [], "1671": [], "1672": [], "866": [], "867": [], "868": [], "thought": 1, "linearli": 0, "ipykernel_34994": [], "1657942527": [], "imag": 1, "url": 1, "subtitl": 1, "ipython": 1, "bibi": 1, "asselbergh": 1, "12714240": 1, "0591149": 1, "xuelong": 1, "fu": 1, "id": [], "pascal": 1, "matha": 1, "12894826": 1, "h2": 1, "load": 1, "erepubl": 1, "brightspotcdn": 1, "dims4": 1, "e9f4828": 1, "2147483647": 1, "strip": 1, "crop": 1, "750x391": 1, "resiz": 1, "1680x876": 1, "webp": 1, "3a": 1, "2f": 1, "2ferepubl": 1, "brightspot": 1, "s3": 1, "amazonaw": 1, "2f64": 1, "2f80": 1, "2f2e590781b165660ad0ce921a7451": 1, "2finternet": 1, "jpg": 1, "600": 1, "shutterstock": 1, "fef5e0": 1, "188ff2": [], "03203a": [], "fef2d8": [], "famili": 1, "title_font_color": 1, "140e01": 1, "font_color": 1, "eerst": 1, "middelst": 1, "van": 1, "lijnen": 1, "mag": 1, "ook": 1, "ccb990": 1, "0a64a": 1, "aa1d0": 1, "mere": 1, "ratio": 0, "coupl": [], "denot": 1, "stastist": [], "achiv": [], "estim": [0, 1], "seri": 1, "consistn": [], "distinguish": 1, "kenton": 1, "deze": [], "heeft": [], "echt": [], "te": [], "veel": [], "verschillend": [], "secti": [], "moeilijk": [], "om": [], "duidelijk": [], "kleuren": [], "stemmen": [], "misschien": [], "beter": [], "twee": [], "drie": [], "gebieden": [], "nemen": [], "zoal": [], "bewust": [], "keuz": [], "voor": [], "afrika": [], "en": [], "d02411": [], "84170b": [], "ed311d": [], "0c7ad4": [], "attribut": [], "stand": [], "groter": [], "dan": 1, "ga": [], "je": [], "skippen": [], "du": [], "hier": [], "moeten": [], "oploss": [], "vinden": [], "gwn": [], "de": 1, "weglaten": [], "het": [], "geen": [], "barplot": [], "maar": [], "meer": [], "overgang": [], "bergen": [], "maken": [], "ik": [], "denk": [], "die": [], "op": [], "kunt": [], "er": [], "met": [], "mui": [], "toch": [], "bovenop": [], "specifiek": [], "land": [], "weten": [], "tickfont": [], "rangemod": 1, "tozero": 1, "idea": [], "staff": [], "trade": [0, 1], "fig1": 1, "scatter_3d": 1, "size_max": 1, "symbol": 1, "w": 1, "novemb": 1, "Is": 1, "investor": 1, "analyst": 1, "investopedia": 1, "term": 1, "asp": 1, "ipykernel_40171": [], "14609274": 1, "asm": 0, "760709": 0, "98": [], "892731": [], "757858": 0, "3437": 0, "pacif": 0, "AND": [0, 1], "300000": 0, "8205": [], "u": 0, "vir": 0, "356177": 0, "80000": [], "610007": [], "69": 0, "latin": 0, "caribbean": 0, "4274119": [], "15178000": [], "19104208": [], "13191708": [], "6692": [], "ipykernel_42212": [], "976440543": [], "823400e": 0, "750740e": 0, "162469e": 0, "118500e": 0, "046450": 0, "437000e": 0, "280000e": 0, "85": [], "966160": [], "49": 0, "580654": 0, "799760": 0, "729650e": 0, "04": 0, "991825e": 0, "573083": 0, "344624": 0, "978658": 0, "792183": [], "899291": 0, "87253": 0, "303374": 0, "454473e": 0, "478089": 0, "203650e": 0, "269990": 0, "946670": 0, "062760e": 0, "415475e": 0, "719765": [], "012337": [], "unique_region": [], "country_continent_dict": [], "bahama": 0, "channel": 0, "congo": 0, "dem": 0, "cote": 0, "ivoir": 0, "egypt": 0, "gambia": 0, "hong": 0, "kong": 0, "sar": 0, "iran": 0, "islam": 0, "korea": 0, "lao": 0, "pdr": 0, "macao": 0, "micronesia": 0, "fed": 0, "martin": 0, "vincent": 0, "grenadin": 0, "timor": 0, "lest": 0, "turkiy": 0, "unique_valu": [], "group_contin": [], "new_dict": [], "new_contin": [], "digital_divide_region": 0, "digit": 0, "divid": 0, "extra": [], "tickmod": 1, "arrai": 1, "tickval": 1, "averag": 1, "df_avg_usag": 1, "groupbi": 1, "df_median_usag": 1, "region_avg_data": 1, "region_median_data": 1, "avg": 1, "modifi": [], "ipykernel_42643": [], "exhibt": [], "showcas": 1, "tertirati": [], "benifici": [], "phenomen": [], "reli": 1, "meet": 1, "technic": 1, "expertis": 1, "crucial": 1, "Not": 1, "neg": 1, "processe": [], "inadequt": [], "knowledg": 1, "workgroup": [], "canva": [], "alreadi": 1, "knew": [], "togeth": 1, "workflow": 1, "veri": 0, "smooth": 1, "atleast": [], "twice": 1, "week": 1, "dai": [], "devid": [], "amongst": [], "our": 1, "focus": 1, "persepct": [], "second": 1, "persecpect": [], "address": 1, "media": 1, "39": [0, 1], "212": 1, "222": 1, "train": 1, "context": 1, "journal": 1, "librari": [0, 1], "scienc": 1, "78": 1, "decidi": [], "ad": 1, "easili": 1, "gini": 0, "stock": 0, "129359e": 0, "100193": 0, "749107e": 0, "37": 0, "852175": 0, "150000e": 0, "436963": 0, "979063e": 0, "48": 0, "380714": 0, "701023e": 0, "223884": 0, "288191": 0, "186092e": 0, "098071": 0, "887077": 0, "556248e": 0, "79": 0, "325488": 0, "314364e": 0, "001938": 0, "8212": 0, "41": 0, "114": 0, "961941": 0, "6693": [], "ipykernel_46636": [], "681042e": 0, "702743": 0, "383021e": 0, "024772": 0, "135051e": 0, "894542": 0, "128636e": 0, "hide": [], "futur": [], "simplefilt": [], "action": [], "ignor": [], "categori": [], "dit": [], "zomaar": [], "zeggen": [], "OF": [], "iet": [], "dat": [], "tekst": [], "alleen": [], "figuur": [], "zou": [], "ondersteunen": [], "niet": [], "andersom": [], "ampl": [], "known": [], "inher": [], "aspect": 1, "besid": [], "sever": 1, "interest": [], "datastori": [], "consist": 1, "clean": 1, "amplifi": 1, "portray": 1, "ultim": 1, "intro": [], "comput": 1, "df_correl": [], "corr": 1, "aa": 1, "vice": 1, "versa": 1, "bc": [], "advanc": 1, "industri": 1, "peerfeedback": [], "session": 1, "fellow": 1, "mostli": 1, "concern": 1, "visualis": 1, "satur": 1, "gradient": 1, "opposit": 1, "One": 1, "receiv": 1, "unclear": 1, "optim": 1, "henc": 1, "simplifi": 1, "singl": 1, "light": 1, "dark": 1, "readabl": 1, "significantli": 1, "being": 1, "coher": 1, "palett": 1, "vari": 1, "throughout": 1, "lack": 1, "conjunct": [], "wherea": 1, "next": [], "exact": [], "same": 1, "With": 1, "place": [], "close": [], "confus": 1, "misinterpret": 1, "tackl": [], "scheme": 1, "avoid": [], "misunderstand": [], "overal": 1, "addit": 1, "accord": 1, "believ": 1, "overview": 1, "balanc": 1, "maintain": 1, "involv": 1, "concept": [], "done": 1, "collabor": 1, "task": 1, "necessari": 1, "conduct": 1, "deploy": 1, "lai": 1, "design": 1, "manag": 1, "content": 1, "organis": 1, "discuss": 1, "stimul": 1, "input": 1, "realis": 1, "mgadmi": 1, "n": 1, "et": 1, "al": 1, "subsequ": 1, "subdivid": [], "geograph": 1, "horizont": 1, "30": 1, "threshold": 1, "halfwai": 1, "herebi": [], "furthermor": 1, "actual": [], "fact": 1, "capabl": 1, "pott": 1, "2009": 1, "short": [], "rath": 1, "hermawan": 1, "digitalis": [], "level": 1, "ismail": 1, "reciproc": [], "limit": 1, "moussa": 1, "b\u00e9jaoui": 1, "sadraoui": 1, "guachaoui": 1, "revisit": 1, "nexu": 1, "telecommun": 1, "doi": 1, "18080": 1, "jtde": 1, "v9n2": 1, "384": 1, "creativ": 1, "old": 1, "theori": 1, "chines": 1, "1080": 1, "17544750802639184": 1, "foster": 1, "IN": 1, "buletin": 1, "ekonomi": 1, "monet": 1, "perbankan": 1, "21098": 1, "bemp": 1, "v22i1": 1, "1041": 1, "19026": 1, "rjaset": 1, "410": 1, "9dcd6a": 1, "7aa2f8": 1, "dfaf67": 1, "16161e": 1, "a9b1d6": [], "7a809c": 1, "block": [], "set_background": [], "script": [], "closest": [], "jp": [], "codecel": [], "editor": [], "queryselector": [], "style": [], "parentnod": [], "removechild": [], "img": [], "src": [], "onerror": [], "1a1b26": [], "cbd0e6": 1, "ipykernel_52150": [], "485c8b": 1, "break": [], "16": [], "bc99f7": 1, "df_all_countries_year": 1, "70": 1, "scene": 1, "backgroundcolor": 1, "zaxi": 1, "million": [0, 1], "ipykernel_54051": [], "2024854304": 0, "matrix": 1, "correlation_matrix": 1, "df_averag": 1, "df_region": 1, "scatter3d": 1, "hoverinfo": 1, "squar": 1, "circl": 1, "diamond": 1, "ipykernel_55025": [], "anoth": 0, "prevent": 0, "employ": 0, "market": 0, "capit": 0, "compani": 0, "logist": [0, 1], "transport": [0, 1], "infrastructur": [0, 1], "8213": 0, "6694": 0, "ipykernel_3742": [], "perspect": 1, "understand": 1, "implic": 1, "mutual": 1, "enabl": 1, "note": 1, "critic": 1, "raidoo": 1, "naju": 1, "turn": 1, "81": 1, "particular": 1, "hover": 1, "reveal": 1, "detail": 1, "record": 1, "distinct": 1, "aggreg": 1, "notabl": 1, "itself": 1, "murth": 1, "partli": 1, "latter": 1, "tend": 1, "withtin": 1, "slightli": 1, "loop": 1, "cannot": 1, "columns_text": 1, "ticktext": 1, "kei": 1, "pearon": 1, "score": 1, "indici": 1, "consid": 1, "mcgranahan": 1, "1972": 1, "benefici": [], "inadequ": 1, "proport": 1, "rotat": 1, "intersect": 1, "front": 1, "swivil": [], "often": [], "heavili": [], "eager": [], "practic": [], "exist": 1, "kaa": 1, "quadrant": 1, "consequ": 1, "enforc": 1, "inquiri": 1, "teach": 1, "standard": 1, "sustain": 1, "standardis": 1, "myth": 1, "realiti": 1, "137": 1, "153": 1, "1207": 1, "s15427439tc1102_05": 1, "model": 1, "region_data": 1, "sign": 1, "hoverdata": 1, "awai": 1, "heat": 1, "rdbu": 1, "_v": 1, "turquois": 1, "violet": 1, "wheat": 1, "whitesmok": 1, "yellow": 1, "yellowgreen": 1, "ipykernel_4265": 0, "correlationcoeffici": 1, "dpe": 1}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"visual": [], "wdi": 0, "dataset": [0, 1], "load": 0, "data": 0, "introduct": 1, "preprocess": [0, 1], "preposess": [], "perspect": [], "1": [], "digit": 1, "divid": 1, "econom": 1, "growth": 1, "2": [], "educ": 1, "3": [], "polit": [], "stabil": [], "reflect": 1, "work": 1, "distribut": 1, "two": [], "The": 1, "overig": [], "figuren": [], "appendix": 1, "comprehens": 1, "tabl": 1, "figur": 1, "gener": 1, "chatgpt": 1, "data_preprocess": [], "its": 1, "interplai": 1, "societ": 1, "factor": 1, "import": 0, "variabl": [], "refer": 1, "paragraph": 1, "inequ": 1, "reinforc": 1, "each": 1, "other": 1, "develop": 1, "enhanc": 1, "wealth": 1, "argumentati": [], "van": [], "de": [], "kaa": [], "g": [], "2020": [], "mutual": [], "enforc": [], "research": 1, "case": [], "structur": [], "inquiri": [], "base": [], "teach": [], "standard": [], "sustain": [], "knowledg": [], "about": [], "standardis": [], "45": [], "55": [], "pdf": [], "select": 0, "relev": 0, "indic": 0, "chang": 0, "format": 0, "merg": 0, "contin": 0, "filter": 0, "out": 0, "non": 0, "countri": 0, "interpol": 0, "us": 0, "panda": 0, "creat": 0, "new": 0, "column": 0, "append": 0, "df_all_countri": 0, "df_wide": 0, "export": 0, "pickl": 0, "file": 0, "impact": 1, "role": 1, "internet": 1, "access": 1, "secondari": 1, "tertiari": 1, "enrol": 1}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})