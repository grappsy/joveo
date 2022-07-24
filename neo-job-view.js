xpath = function(e) {
    for (var t = [], a = document.evaluate(e, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null), n = 0; n < a.snapshotLength; n += 1) t.push(a.snapshotItem(n));
    return t
}, 
appendIframe = function(e) {
    var t = document.createElement("div");
    t.setAttribute("id", "conversion_container"), t.style.height = "0px", t.style.width = "0px", t.style.overflow = "hidden";
    var a = document.createElement("iframe");
    a.setAttribute("src", e), a.setAttribute("frameborder", "0"), a.setAttribute("height", "0"), a.setAttribute("width", "0"), a.setAttribute("noresize", "0"), a.setAttribute("id", "convframe"), a.setAttribute("name", "convframe"), a.setAttribute("allowtransparency", "true");
    var n = document.getElementsByTagName("script"),
        r = n[n.length - 1];
    t.appendChild(a), r.parentNode.appendChild(t)
}, 
getReferrer = function() {
    var r = "";
    try {
        r = document.referrer
    } catch (r) {}
    return r
}, 
trackJoMeter = function() {
    var e, r = "";
    try {
        r = getJobId()
    } catch (e) {}
    var a = getReferrer();
    e = "https://www.jometer.com/v2/track?c=6ft6&a=1&r=" + r + "&loc=" + encodeURIComponent(a), appendIframe(e)
}, 
trackClickMeter = function() {
    var a = "";
    try {
        a = getCustomParams()
    } catch (a) {}
    appendIframe("https://clickmeter.com/conversion.aspx?id=60F8589F70084CC3A5DDB71EAFB9FFA8" + a)
}, 
trackMatopi = function() {
    var a = "";
    try {
        a = getMatopiCustomParams()
    } catch (a) {}
    appendIframe("https://trk.thematopi.com/conversion?id=60F8589F70084CC3A5DDB71EAFB9FFA8" + a)
}, 
setCookies = function() {
    function getDomainName() {
        try {
            var domainsList = window.location.hostname.split(".");
            return "." + domainsList[domainsList.length - 2] + "." + domainsList[domainsList.length - 1]
        } catch (e) {
            return window.location.hostname
        }
    }

    function getJclickId() {
        try {
            var searchSubString = window.location.search.substring(1);
            var searchList = searchSubString.split("jClickId=");
            return searchList[1].split("&")[0];
        } catch (e) {
            return "";
        }
    }
    var cookieKey = "jClickId";
    var cookieValue = getJclickId();
    var date = new Date,
        expires = new Date(date.getFullYear() + 2, date.getMonth(), date.getDate()),
        cookieStr = cookieKey + "=" + cookieValue + "; expires=" + expires + "";
    domain = "" + getDomainName() + "";
    document.cookie = cookieStr
}, 
setStorage = function() {
    function getJclickId() {
        try {
            var searchSubString = window.location.search.substring(1);
            var searchList = searchSubString.split("jClickId=");
            return searchList[1].split("&")[0];
        } catch (e) {
            return "";
        }
    }
    var key = "jClickId";
    var value = getJclickId();
    if (localStorage) localStorage.setItem(key, value)
};
// fb pixel code
const facebookPixelCode=`!function(f,b,e,v,n,t,s)
				{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
				n.callMethod.apply(n,arguments):n.queue.push(arguments)};
				if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
				n.queue=[];t=b.createElement(e);t.async=!0;
				t.src=v;s=b.getElementsByTagName(e)[0];
				s.parentNode.insertBefore(t,s)}(window, document,'script',
				'https://connect.facebook.net/en_US/fbevents.js');
				fbq('init', '259166819589309');
				fbq('track', 'PageView');
				fbq('trackCustom','job_category', {{job category cookie data}});  `

function placeFbPixel(facebookPixelCode) {
        try {
            var head = document.getElementsByTagName("head")[0], 
            script = document.createElement("script");
            script.type = "text/javascript";
            script.charset = "utf-8";
            script.text = facebookPixelCode;
            head.appendChild(script)
        } catch (e) {}
    }
try {
    trackJoMeter()
} catch (e) {};
try {
    trackClickMeter()
} catch (e) {};
try {
    trackMatopi()
} catch (e) {};
try {
    setCookies()
} catch (e) {};
try {
    setStorage()
} catch (e) {};
try {
placeFBPixel(facebookPixelCode)
} catch (e) {};

// find elements
var banner = $("#banner-message")
var button = $("button")

// handle click and add class
button.on("click", () => {
  banner.toggleClass("alt");
  fbq('track', 'PageView');
})
