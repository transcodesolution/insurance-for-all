window.googletag = window.googletag || { cmd: [] };

let anchorSlot;

googletag.cmd.push(() => {

    anchorSlot = googletag.defineOutOfPageSlot(
        "/23201071713/anchor_ad_top",
        googletag.enums.OutOfPageFormat.TOP_ANCHOR
    );

    // Anchor slots return null if the page or device does not support anchors.
    if (anchorSlot) {
        anchorSlot.addService(googletag.pubads());
    }
    // Enable SRA and services.
    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.enableServices();
});