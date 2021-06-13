import Link from "next/link"


export default function InstagramFeed({ instagramPosts }) {

    return (
        <>



            <ul>
                {/* let's iterate through each of the
         instagram posts that were returned
         from the Instagram API*/

                }


                {instagramPosts.map && instagramPosts.map(({ node }, i) => {
                    return (
                        // let's wrap each post in an anchor tag
                        // and construct the url for the post using
                        // the shortcode that was returned from the API
                        <li>asda
                            <a
                                href={`https://www.instagram.com/p/${node.shortcode}`}
                                key={i}
                                aria-label="view image on Instagram"
                            >
                                {/* set the image src equal to the image
                url from the Instagram API*/}
                                <img
                                    src={node.thumbnail_src}
                                    alt={
                                        // the caption with hashtags removed
                                        node.edge_media_to_caption.edges[0].node.text
                                            .replace(/(#\w+)+/g, "")
                                            .trim()
                                    }
                                />
                            </a>
                        </li>
                    )
                })}
            </ul>
            {}
        </>
    )
}