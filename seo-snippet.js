// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.votereno.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.votereno.com/","title_tag":"Kalihi community public safety | Reno Abihai","meta_description":"Reno Abihai for Hawaii State Representative, District 28 – Kalihi, Palama, Chinatown, Sand Island. Community leadership Hawaii, youth mentorship, homelessness solutions."},{"page_url":"https://www.votereno.com/priorities","title_tag":"Homelessness solutions Hawaii & safety | Reno Abihai","meta_description":"Reno Abihai’s priorities for District 28: homelessness solutions Hawaii, addiction support services, public safety, affordable housing Hawaii, and reducing cost of living Hawaii."},{"page_url":"https://www.votereno.com/meet-reno","title_tag":"Honolulu Coach & Mentor leader | Reno Abihai","meta_description":"Meet Honolulu community leader, Coach and Mentor Reno Abihai. Raised in Kalihi, Mayor Wright Homes, Chinatown and Palama, leading youth mentorship programs and Kakaʻako Boxing Club."},{"page_url":"https://www.votereno.com/endorsements","title_tag":"Community leadership Hawaii support | Reno Abihai","meta_description":"Endorsements for Reno Abihai, candidate for Hawaii State Representative District 28. Backing focused on public safety, affordable housing Hawaii, and cost of living Hawaii solutions."},{"page_url":"https://www.votereno.com/contact-8","title_tag":"Get involved in Kalihi community | Reno Abihai","meta_description":"Contact and volunteer for Reno Abihai for State Representative District 28 – Kalihi, Palama, Chinatown, Sand Island. Join community leadership Hawaii and support youth mentorship programs."},{"page_url":"https://www.votereno.com/blank","title_tag":"Privacy Policy | Reno Abihai campaign Hawaii","meta_description":"Privacy Policy for the Reno Abihai for Hawaii State Representative District 28 campaign website serving Kalihi, Palama, Chinatown, Sand Island and surrounding Honolulu communities."}],"keywords":["Reno Abihai","Kalihi community","affordable housing Hawaii","youth mentorship programs","homelessness solutions Hawaii","public safety District 28","addiction support services","cost of living Hawaii","Kakaʻako Boxing Club","community leadership Hawaii","Liliha","Chinatown","Honolulu","State Representative","Palama","Mayor Wrights Homes","Coach","Mentor","Sand Island"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.votereno.com/#organization",
  "name": "Friends of Reno Abihai",
  "url": "https://www.votereno.com/",
  "description": "Official campaign website for Reno Abihai, candidate for Hawaii State Representative, District 28 - Kalihi, Palama, Chinatown, Iwilei and Sand Island.",
  "logo": {
    "@type": "ImageObject",
    "url": "https://static.wixstatic.com/media/6c7d2a_7cc050a2968e4c6080a110805edf01c6~mv2.png/v1/crop/x_73,y_149,w_329,h_187/fill/w_171,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6c7d2a_7cc050a2968e4c6080a110805edf01c6~mv2.png"
  },
  "image": [
    "https://static.wixstatic.com/media/6c7d2a_7cc050a2968e4c6080a110805edf01c6~mv2.png/v1/crop/x_73,y_149,w_329,h_187/fill/w_171,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6c7d2a_7cc050a2968e4c6080a110805edf01c6~mv2.png",
    "https://static.wixstatic.com/media/36ae3b_d6527d9f31ac4de7b2f886686c698282~mv2.png/v1/fill/w_70,h_93,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/36ae3b_d6527d9f31ac4de7b2f886686c698282~mv2.png"
  ],
  "email": "mailto:reno@votereno.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "P.O. Box 19116",
    "addressLocality": "Honolulu",
    "addressRegion": "HI",
    "postalCode": "96817",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.facebook.com/",
    "https://www.instagram.com/"
  ],
  "areaServed": [
    "Kalihi",
    "Palama",
    "Chinatown",
    "Iwilei",
    "Sand Island",
    "Hawaii State House District 28"
  ],
  "founder": {
    "@type": "Person",
    "name": "Reno Abihai",
    "description": "Candidate for Hawaii State Representative, District 28, with over 25 years of leadership experience across healthcare, technology, and community services, and a long-time youth mentor through Kakaʻako Boxing Club.",
    "url": "https://www.votereno.com/meet-reno",
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "McKinley High School"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "University of Hawaiʻi at Mānoa Shidler College of Business"
      }
    ],
    "knowsAbout": [
      "public safety",
      "homelessness",
      "addiction",
      "affordable housing",
      "cost of living",
      "youth mentorship",
      "community services"
    ]
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "campaign",
    "email": "mailto:reno@votereno.com"
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
