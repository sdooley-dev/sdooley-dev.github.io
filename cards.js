// cards.js — reusable card builder for the list view
// Cards: image/title-fallback header, NO top badges, description (40 chars) with inline "more →",
// sponsor/date row just above description (left/right), and e_id at bottom-left in light grey (no label).
// Tags + verify links are hidden on cards (detail page only).

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

function escapeAttr(s){ return String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

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

  const fullDesc = String((item.e_desc && item.e_desc !== "N/A") ? item.e_desc : "");
  const maxChars = 40;
  const isLong  = fullDesc.length > maxChars;
  const shortDesc = isLong ? fullDesc.slice(0, maxChars).trim().replace(/[\\.,;:!?-]+$/, "") + "…" : fullDesc;

  const hasImage = item.e_image && item.e_image !== "N/A";
  const safeTitle = escapeAttr(item.e_title || "");
  const imageHtml = hasImage
    ? `<img src="img/cards/${item.e_image}" alt="${safeTitle}" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'media-title-fallback',textContent:'${safeTitle}'}))">`
    : `<div class="media-title-fallback"><span>${safeTitle}</span></div>`;

  const sponsor = (item.e_sponsoring && item.e_sponsoring !== "N/A") ? item.e_sponsoring : "";
  const dateLabel = displayDateShort(item.e_date);

  const metaTop = (sponsor || dateLabel)
    ? `<div class="meta-top">
         <span class="meta-left">${sponsor || ""}</span>
         <span class="meta-right">${dateLabel || ""}</span>
       </div>`
    : "";

  return `
    <div class="content-container" style="margin-top: 2px;">
      <div class="content032825">
        <a class="card-media" href="${link}" title="Open: ${safeTitle}">
          ${imageHtml}
        </a>
        <div class="card-body">
          <div class="event-content">
            ${metaTop}
            <div class="event-description">
              ${shortDesc}${ isLong ? ` <a href="${link}" class="more-inline">more →</a>` : "" }
            </div>
          </div>
          <div class="card-foot"><span class="eid">${(item.e_id !== undefined && item.e_id !== null) ? item.e_id : ""}</span></div>
        </div>
      </div>
    </div>
  `;
}
