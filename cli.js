exports.encode = {
    base32: require("thirty-two").encode,
    base64: require("atob"),
    binary: require("decode-encode-binary").encode,
    hex: require("hex-encode-decode").encode,
    morse: require("morse").encode,
}

exports.decode = {
    base32: require("thirty-two").decode,
    base64: require("btoa"),
    binary: require("decode-encode-binary").decode,
    hex: require("hex-encode-decode").decode,
    morse: require("morse").decode,
}