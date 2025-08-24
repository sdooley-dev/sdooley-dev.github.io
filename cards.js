// cards.js — builds each card
// - Media header: always dark fallback (no e_image), shows category_tier1 icon (own line) + title
// - Sponsor shown as dark "pill" with type icon on the left
// - Date on the right (above description)
// - Description 60 chars + inline "more →"
// - ID at bottom-left (light gray); NO verify/tags on cards

export function getEventTypeInfo(type){
  const eventType = String(type || '').substring(0,2);
  switch (eventType) {
    case "01": return { icon: '<i class="fa fa-trophy" aria-hidden="true" title="Awards" style="color: #4169E1;"></i>', title: "Awards" };
    case "02": return { icon: '<i class="fa fa-id-badge" aria-hidden="true" title="Work Experience"></i>', title: "Work Experience", anchor: "experience", title_blurb: "Please see some of the Work Experience that I have." };
    case "03": return { icon: '<i class="fa fa-university" aria-hidden="true" title="Courses & Certificates"></i>', title: "Courses & Certificates", anchor: "courses", title_blurb: "Please see some of the courses that I have completed." };
    case "04": return { icon: '<i class="fa fa-certificate" aria-hidden="true" title="x"></i>', title: "x" };
    case "05": return { icon: '<i class="fa fa-comments-o" aria-hidden="true" title="Feedback"></i>', title: "Feedback" };
    case "06": return { icon: '<i class="fa fa-chalkboard-teacher" aria-hidden="true" title="Presentations & Workshops"></i>', title: "Presentations & Workshops", anchor: "presentations", title_blurb: "Please see some of the presentations that I have completed." };
    case "07": return { icon: '<i class="fa fa-chalkboard-teacher" aria-hidden="true" title="Case Studies"></i>', title: "Case Studies", anchor: "case-studies", title_blurb: "Please see some of the case studies that I have completed." };
    default:   return { icon: "", title: type || "Uncategorized" };
  }
}

// Map category_tier1 => Font Awesome icon (shown above title in the media header)
function getTier1Icon(category){
  const val = String(category || '').trim().toLowerCase();
  switch (val) {
    case 'data analytics':           return '<i class="fa-solid fa-chart-simple" aria-hidden="true"></i>';       // modern for bar-chart
    case 'dev-ops':                  return '<i class="fa fa-code-fork" aria-hidden="true"></i>';
    case 'cloud':                    return '<i class="fa fa-cloud" aria-hidden="true"></i>';
    case 'programming':              return '<i class="fa fa-code" aria-hidden="true"></i>';
    case 'database':                 return '<i class="fa fa-database" aria-hidden="true"></i>';
    case 'security':                 return '<i class="fa fa-shield" aria-hidden="true"></i>';
    case 'data engineering':         return '<i class="fa fa-table" aria-hidden="true"></i>';
    case 'qa engineering':           return '<i class="fa fa-square-check" aria-hidden="true"></i>';    // modern for check-square-o
    case 'artificial intelligence':  return '<i class="fa fa-brain" aria-hidden="true"></i>';           // replacement for nonstandard "check-brain"
    case 'video':                    return '<i class="fa-brands fa-youtube" aria-hidden="true"></i>';           // replacement for nonstandard "check-brain"
    
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
  const m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][d.getMonth()];
  return `${m} ${y}`;
}

export function buildCard(item, backHash=""){
  const encodedBack = encodeURIComponent(backHash || "");
  const link = `#item/${item.e_id}${encodedBack?`/${encodedBack}`:""}`;

  // Description (truncate to 60 chars)
  const fullDesc = String((item.e_desc && item.e_desc !== "N/A") ? item.e_desc : "");
  const maxChars = 60;                         // increased from 40
  const isLong  = fullDesc.length > maxChars;
  const shortDesc = isLong ? fullDesc.slice(0, maxChars).trim().replace(/[\\.,;:!?-]+$/, "") + "…" : fullDesc;

  // Media header: ALWAYS dark fallback with category icon + title (no e_image)
  const safeTitle = escapeAttr(item.e_title || "");
  const tierIcon = getTier1Icon(item.category_tier1);
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

  const sponsorBadge = sponsor
    ? `<span class="sponsor-badge">${typeIcon}<span class="sponsor-text">${sponsor}</span></span>`
    : "";

  const metaTop = (sponsorBadge || dateLabel)
    ? `<div class="meta-top">
         <span class="meta-left">${sponsorBadge}</span>
         <span class="meta-right">${dateLabel || ""}</span>
       </div>`
    : "";

  return `
    <div class="content-container" style="margin-top: 2px;">
      <div class="content032825">
        <a class="${mediaClass}" href="${link}" title="Open: ${safeTitle}">
          ${imageHtml}
        </a>
        <div class="card-body">
          <div class="event-content">
            ${metaTop}
            <div class="event-description">
              ${shortDesc}${ isLong ? ` <a href="${link}" class="more-inline">more →</a>` : "" }
            </div>
          </div>
          <div class="card-foot">
            <span class="eid">${(item.e_id !== undefined && item.e_id !== null) ? item.e_id : ""}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}
