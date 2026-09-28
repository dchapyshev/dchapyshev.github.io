// Takes the current version and the download links from the update files of the stable channel. A
// link is written as ".../releases/latest#<product>/<system>/<arch>/<format>" and leads to the latest
// GitHub release when the update files cannot be read.
document.addEventListener("DOMContentLoaded", function () {
    var versions = document.querySelectorAll(".latest-version");
    var links = document.querySelectorAll('a[href*="/releases/latest#"]');
    if (!versions.length && !links.length)
        return;

    fetch("/updates/stable.json")
        .then(function (response) { return response.json(); })
        .then(function (rules) {
            return fetch("/updates/versions/" + rules.targets.latest + ".json");
        })
        .then(function (response) { return response.json(); })
        .then(function (manifest) {
            versions.forEach(function (element) {
                element.textContent = manifest.version;
            });

            links.forEach(function (link) {
                var key = link.getAttribute("href").split("#")[1].split("/");
                var product = manifest.packages[key[0]] || {};
                var system = product[key[1]] || {};
                var files = system[key[2]] || [];
                for (var i = 0; i < files.length; ++i) {
                    if (files[i].format === key[3]) {
                        link.href = manifest.path + "/" + files[i].file;
                        break;
                    }
                }
            });
        });
});
