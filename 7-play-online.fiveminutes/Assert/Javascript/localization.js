async function localizeContent() {
    // Use the browser's language settings
    const lang = (navigator.language || navigator.languages[0] || 'en').split('-')[0];

    try {
        // Dynamically fetch the appropriate language file
        const localizationData = await fetch(`language/${lang}.json`).then((res) => res.json());
        console.log(localizationData, 'localization data')
        // Replace the content
        document.querySelectorAll("[data-locize]").forEach((el) => {
            const key = el.getAttribute("data-locize");
            if (localizationData[key]) {
                if (el.tagName.toLowerCase() === 'meta') {
                    el.setAttribute('content', localizationData[key]);
                } else {
                    el.textContent = localizationData[key];
                }
            }
        });
    } catch (error) {
        console.error("Error loading localization data:", error);
    }
}

localizeContent();