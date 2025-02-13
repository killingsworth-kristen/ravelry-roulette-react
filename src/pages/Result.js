import "../css/Result.css";

import Spinner from "../components/Spinner.js";

export default function Result () {
    const resultObj = {
        name: "pattern-name",
        author: "pattern author",
        photos: ["photo1", "photo2"],
        craft: "craft-type",
        free: "boolean",

        // comments_count	Integer		
        // craft	Craft (list)		
        // created_at	Date		Date that this pattern record was created
        // currency	String		Currency for price. Will be a PayPal-supported currency: https://www.paypal.com/cgi-bin/webscr?cmd=p/sell/mc/mc_wa-outside
        // currency_symbol			
        // difficulty_average	Float		
        // difficulty_count	Integer		
        // download_location	DownloadLocation		Where to download or purchase the pattern - contains a URL, free flag, and type ("ravelry" or "external")
        // downloadable	Boolean		
        // favorites_count	Integer		
        // free	Boolean		Free pattern (available free from Ravelry or free from some other source)
        // free	Boolean		Free pattern (available free from Ravelry or free from some other source)
        // gauge	String		Gauge
        // gauge_description	String		
        // gauge_divisor	Integer		Gauge divisor (ie. stitches per [divisor]"), in inches. Accepted options: 1, 2, 4 corresponding to 1" (2.5cm), 2" (5cm), 4" (10cm).
        // gauge_pattern	String		Pattern for gauge (free form text)
        // generally_available	Date		Our best estimate of the date when this pattern first became available to the public. Not displayed on the pattern page.
        // has_uk_terminology	Boolean		Crochet pattern includes UK terminology
        // has_us_terminology	Boolean		Crochet pattern includes US terminology
        // id	Integer		
        // languages			
        // name	String		Pattern name
        // notes_html	String		Pattern notes rendered as HTML.
        // notes			
        // packs	Pack (full)		Packs connect a pattern to a suggested yarn. Within a pack, only "yarn_id" is required.
        // pattern_attributes	Array, PatternAttribute		
        // pattern_author	PatternAuthor		
        // pattern_categories	Array, PatternCategory		
        // pattern_needle_sizes	String		
        // pattern_type			
        // pdf_in_library	Boolean		Set to "true" if the user's library contains PDF files for this pattern.
        // pdf_url	String		
        // permalink	String		
        // personal_attributes	Hash		Hash containing information related to this pattern's status in the current user's notebook (queued, favorited, bookmark_id)
        // photos	Array, Photo		
        // price	String		Price. If the pattern is associated with a Ravelry download, the price is retrieved from the product and the price attribute is read-only.
        // printings	Printing (list)		
        // product_id	Integer		Product ID for the product that is currently listed on the pattern page as a "buy now" option, if any
        // projects_count	Integer		
        // published	Date		Date the pattern was published, displayed on the pattern page (also see "generally_available")
        // queued_projects_count	Integer		
        // rating_average	Float		
        // rating_count	Integer		
        // ravelry_download	Boolean		
        // row_gauge	String		Row gauge
        // sizes_available	String		
        // unlisted_product_ids	Array, Integer		Product IDs for products that are not currently listed on the pattern page as a "buy now" option. Only present if the current user has editing permissions.
        // updated_at	Date		Date that this pattern record was last updated
        // url	String		
        // volumes_in_library	Array, Integer	Yes	If the user has pattern PDFs in their library, the Volume IDs will be included. See /volumes/{id}.json
        // yardage	Integer		
        // yardage_description	String		
        // yardage_max	Integer		Maximum yardage. To supply meterage instead, see meterage_max.
        // yarn_list_type			
        // yarn_weight	YarnWeight (list)		
        // yarn_weight_description	String		
    }

    // TODO: Grab queryState from local storage and rerun query

    return (
        <div>
            <h2 className="big-text">You have landed on:</h2>
            {/* I could iframe rav link instead? */}
            <h3 className="result-pattern-name">TITLE</h3>
            <div className="result-pattern-thumb-container">
                <img className="result-pattern-thumb"/>
            </div>
            <div className="result-pattern-link-container">
                <a href="#" className="result-pattern-link"><h3>View on Ravelery</h3></a>
            </div>
            <div>
                <h3>Spin Again!</h3>
                <button>Use the same settings</button>
                <button>I want to change my settings...</button>
                {/* two buttons - use same params or select new parameters  */}
            </div>
        </div>
    )
}