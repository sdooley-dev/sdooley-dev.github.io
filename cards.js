// cards.js — builds each card
// - Media header: always dark fallback (no e_image), shows icon_item icon (own line) + title
// - Sponsor shown as dark "pill" with type icon on the left
// - Date on the right (above description)
// - Description 60 chars + inline "more →"
// - ID at bottom-left (light gray); NO verify/tags on cards

export function getEventTypeInfo(type){
  const eventType = String(type || '').substring(0,2);
  switch (eventType) {
    case "01": return { icon: '<i class="fa fa-bullseye" aria-hidden="true" title="Featured" style="color: #4169E1;"></i>', title: "Featured", anchor: "featured", title_blurb: "Featured professional profile and contact information." };
    case "02": return { icon: '<i class="fa fa-id-badge" aria-hidden="true" title="Work Experience"></i>', title: "Work Experience", anchor: "experience", title_blurb: "Please see some of the Work Experience that I have." };
    case "03": return { icon: '<i class="fa fa-university" aria-hidden="true" title="Courses & Certificates"></i>', title: "Courses & Certificates", anchor: "courses", title_blurb: "Please see some of the courses that I have completed." };
    case "04": return { icon: '<i class="fa fa-certificate" aria-hidden="true" title="x"></i>', title: "x" };
    case "05": return { icon: '<i class="fa fa-comments-o" aria-hidden="true" title="Feedback"></i>', title: "Feedback" };
    case "06": return { icon: '<i class="fa fa-chalkboard-teacher" aria-hidden="true" title="Presentation or Workshop"></i>', title: "Presentation or Workshop", anchor: "presentations", title_blurb: "Please see some of the presentations that I have completed." };
    case "07": return { icon: '<i class="fa fa-file-text" aria-hidden="true" title="Case Study"></i>', title: "Case Study", anchor: "case-studies", title_blurb: "Please see some of the case studies that I have completed." };
    case "08": return { icon: '<i class="fa fa-trophy" aria-hidden="true" title="Award"></i>', title: "Award" };
    case "09": return {
      icon: '<i class="fa-regular fa-rectangle-list" aria-hidden="true" title="Summary"></i>',
      title: "Summary",
      anchor: "summary"
    };
    default:   return { icon: "", title: type || "Uncategorized" };
  }
}

// Map icon_item => Font Awesome icon (shown above title in the media header)
export function getTier1Icon(iconItem){
  const val = String(iconItem || '').trim();
  
  // If icon_item is empty or N/A, fall back to category_tier1 for backward compatibility
  if (!val || val === "N/A") {
    return '';
  }
  
  // Direct Font Awesome class mapping from icon_item field
  // The icon_item field should contain the full Font Awesome class (e.g., "fa fa-code", "fa-solid fa-chart-simple")
  if (val.startsWith('fa')) {
    return `<i class="${val}" aria-hidden="true"></i>`;
  }
  
  // Legacy support for category-based icons (fallback)
  const categoryVal = val.toLowerCase();
  switch (categoryVal) {
    case 'data analytics':           return '<i class="fa-solid fa-chart-simple" aria-hidden="true"></i>';
    case 'dev-ops':                  return '<i class="fa fa-code-fork" aria-hidden="true"></i>';
    case 'cloud':                    return '<i class="fa fa-cloud" aria-hidden="true"></i>';
    case 'programming':              return '<i class="fa fa-code" aria-hidden="true"></i>';
    case 'database':                 return '<i class="fa fa-database" aria-hidden="true"></i>';
    case 'security':                 return '<i class="fa fa-shield" aria-hidden="true"></i>';
    case 'data engineering':         return '<i class="fa fa-table" aria-hidden="true"></i>';
    case 'qa engineering':           return '<i class="fa fa-square-check" aria-hidden="true"></i>';
    case 'artificial intelligence':  return '<i class="fa fa-brain" aria-hidden="true"></i>';
    case 'video':                    return '<i class="fa-brands fa-youtube" aria-hidden="true"></i>';
    case 'comments':                 return '<i class="fa-regular fa-comments" aria-hidden="true"></i>';
    case 'summary':                  return '<i class="fa-solid fa-list-check" aria-hidden="true"></i>';
    
    default:                         return '';
  }
}

function escapeAttr(s){ return String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function escapeHtml(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

function displayDateShort(value){
  if(!value || value === "N/A") return "";
  const d = new Date(value);
  if(Number.isNaN(+d)) return "";
  const y = d.getFullYear();
  if (y < 2021) return "4+ years ago";
  return `${y}`;
}

export function buildCard(item, backHash=""){
  const encodedBack = encodeURIComponent(backHash || "");
  const link = `#item/${item.e_id}${encodedBack?`/${encodedBack}`:""}`;

  // Description (truncate to 60 chars)
  let fullDesc = String((item.e_desc && item.e_desc !== "N/A") ? item.e_desc : "");
  
  // Remove h3 title tags and their content for main card display
  fullDesc = fullDesc.replace(/<h3[^>]*>.*?<\/h3>/gi, '');
  
  // Remove any remaining [e_title] placeholders from main card display
  fullDesc = fullDesc.replace(/\[e_title\]/g, '');
  
  // Cache bust: 2024-01-15 - Fixed [e_title] removal for main cards
  
  const maxChars = 60;                         // increased from 40
  const isLong  = fullDesc.length > maxChars;
  const shortDesc = isLong ? fullDesc.slice(0, maxChars).trim().replace(/[\\.,;:!?-]+$/, "") + "…" : fullDesc;
  
  // Handle [inc] case for cards
  const cardDesc = fullDesc === "[inc]" ? "[Loading content...]" : shortDesc;
  const cardIsLong = fullDesc === "[inc]" ? true : isLong;

  // Media header: ALWAYS dark fallback with category icon + title (no e_image)
  const safeTitle = escapeAttr(item.e_title || "");
  const tierIcon = getTier1Icon(item.icon_item);
  const mediaClass = "card-media";
  const imageHtml = `
    <div class="media-title-fallback">
      <div class="tier1-stack">
        <span class="tier1-icon">${tierIcon}</span>
        <span class="tier1-title">${safeTitle}</span>
      </div>
    </div>`.trim();

  // Sponsor pill (left) + date (right)
  const sponsor = (item.e_sponsoring && item.e_sponsoring !== "N/A") ? escapeHtml(item.e_sponsoring) : "";
  const dateLabel = displayDateShort(item.e_date);
  const typeIcon = getEventTypeInfo(item.e_type || "").icon;

  const sponsorDisplay = sponsor === "Booz Allen" 
    ? `<img src="img/logo/booz-allen-hamilton.png" alt="Booz Allen Hamilton" title="${sponsor}" style="height: 20px; width: auto; vertical-align: middle; margin: 0; padding: 0;">`
    : sponsor === "Palantir"
    ? `<img src="img/logo/palantir.png" alt="Palantir" title="${sponsor}" style="height: 20px; width: auto; vertical-align: middle; margin: 0; padding: 0;">`
    : sponsor === "Salesforce"
    ? `<img src="img/logo/salesforcev2.png" alt="Salesforce" title="${sponsor}" style="height: 40px; width: auto; vertical-align: middle; margin: 0; padding: 0;">`
    : sponsor === "Lockheed Martin Information Services"
    ? `<img src="img/logo/lockheed-martin-blue.png" alt="Lockheed Martin Information Services" title="${sponsor}" style="height: 30px; width: auto; vertical-align: middle; margin: 0; padding: 0;">`
    : sponsor === "Amazon Web Services (AWS)"
    ? `<img src="img/logo/aws.png" alt="Amazon Web Services (AWS)" title="${sponsor}" style="height: 40px; width: auto; vertical-align: middle; margin: 0; padding: 0;">`
    : sponsor === "Databricks"
    ? `<img src="img/logo/databricks-long.png" alt="Databricks" title="${sponsor}" style="height: 20px; width: auto; vertical-align: middle; margin: 0; padding: 0;">`
    : sponsor === "IBM"
    ? `<img src="img/logo/ibm.png" alt="IBM" title="${sponsor}" style="height: 20px; width: auto; vertical-align: middle; margin: 0; padding: 0;">`
    : sponsor === "Accenture"
    ? `<img src="img/logo/accenture.png" alt="Accenture" title="${sponsor}" style="height: 20px; width: auto; vertical-align: middle; margin: 0; padding: 0;">`
    : sponsor;
    
  const sponsorBadge = sponsor === "Booz Allen" || sponsor === "Palantir" || sponsor === "Salesforce" || sponsor === "Lockheed Martin Information Services" || sponsor === "Amazon Web Services (AWS)" || sponsor === "Databricks" || sponsor === "IBM" || sponsor === "Accenture"
    ? sponsorDisplay
    : sponsor
      ? `<span class="sponsor-badge"><span class="sponsor-text">${sponsor}</span></span>`
      : "";

  const metaTop = (sponsorBadge || dateLabel)
    ? `<div class="meta-top">
         <span class="meta-left">${sponsorBadge}</span>
       </div>
               ${dateLabel ? `<div class="meta-date">${typeIcon} ${dateLabel} <span style="margin-left: 8px; color: white; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.9rem;">${(item.e_id !== undefined && item.e_id !== null) ? item.e_id : ""}</span></div>` : ""}`
    : "";

  const cardHtml = `
    <div class="content-container" style="margin-top: 2px;">
      <div class="content032825">
        <a class="${mediaClass}" href="${link}" title="Open: ${safeTitle}">
          ${imageHtml}
        </a>
        <div class="card-body">
          <div class="event-content">
            ${metaTop}
            <div class="event-description" id="card-desc-${item.e_id}">
              ${cardDesc}${ cardIsLong ? ` <a href="${link}" class="more-inline">more →</a>` : "" }
            </div>
          </div>
          <div class="card-foot">
          </div>
        </div>
      </div>
    </div>
  `;

  // If this is an [inc] item, load the content after the card is rendered
  if (fullDesc === "[inc]") {
    setTimeout(() => {
      const cardDescElement = document.getElementById(`card-desc-${item.e_id}`);
      if (cardDescElement) {
        const incFile = `drs/inc/html/${item.e_id}.html`;
        fetch(incFile)
          .then(response => {
            if (response.ok) {
              return response.text();
            } else {
              throw new Error(`HTTP ${response.status}`);
            }
          })
          .then(htmlContent => {
            // Truncate the HTML content to ~60 characters for the card
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlContent;
            const textContent = tempDiv.textContent || tempDiv.innerText || '';
            const truncatedText = textContent.length > maxChars 
              ? textContent.slice(0, maxChars).trim().replace(/[\\.,;:!?-]+$/, "") + "…"
              : textContent;
            
            cardDescElement.innerHTML = `${truncatedText} <a href="${link}" class="more-inline">more →</a>`;
          })
          .catch(error => {
            console.error(`Error loading include file ${incFile}:`, error);
            cardDescElement.innerHTML = `[Content unavailable] <a href="${link}" class="more-inline">more →</a>`;
          });
      }
    }, 0);
  }

  return cardHtml;
}
