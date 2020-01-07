export const Snippet = () => {
  return (<figure className="template-card snippet" id="{{.id}}">
    <div className="tag-group">
      {{ range.tags }}
      <button className="tooltip {{.}}">
        {{.}}
        <span className="tooltiptext"></span>
      </button>
      {{ end }}
    </div>
    {{ $page_url:= .tutorial }}
    {{ if $page_url }}
    {{ else }}
    {{ $page_url:= .share_url }}
    {{ end }}
    {{ $template_page:=  .id | printf "/templates/pages/%s" }}
    {{ $page_url:= or $page_url $template_page }}
    <a href={{ $page_url }}>
      <h2>
        {{.title }}
      </h2>
      <img src="/templates/media/right-arrow.svg" />
    </a>
    <p>{{.description | markdownify }}</p>
    <div className="copy-group">
      <div className="copy-step">
        <img id="img" type="image/svg+xml" src="/templates/media/file.svg" />
        <span>Copy into a Worker script:</span>
      </div>
      <div className="copy">
        <code>{{.code }}</code>
      </div>
    </div>
  </figure>)
}