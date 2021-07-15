import { groq } from 'next-sanity'

export const getAllSpeakersQuery = groq`*[_type == "speaker" ]{
  
  name,
  bio,
  title,
  "slug": slug.current,
  twitter,
  github,
  "company": company->name,
  "talk": *[_type == "talk" && ^._id in speakers[]._ref][0]{
    title,
    description
  },
  image
}`

export const getAllMusikkQuery = groq`*[_type == "speaker" &&  (artisttype[0] == 'musikk' || artisttype[1] == 'musikk')]{
  
        name,
        bio,
        title,
        "slug": slug.current,
        twitter,
        github,
        "company": company->name,
        "talk": *[_type == "talk" && ^._id in speakers[]._ref][0]{
          title,
          description
        },
        image
      }`

      export const getAllKunstQuery = groq`*[_type == "speaker" &&  (artisttype[0] == 'kunst' || artisttype[1] == 'kunst')]{
  
        name,
        bio,
        title,
        "slug": slug.current,
        twitter,
        github,
        "company": company->name,
        "talk": *[_type == "talk" && ^._id in speakers[]._ref][0]{
          title,
          description
        },
        image
      }`

      export const getAllFramtidQuery = groq`*[_type == "speaker" &&  (artisttype[0] == 'framtid' || artisttype[1] == 'framtid')]{
  
        name,
        bio,
        title,
        "slug": slug.current,
        twitter,
        github,
        "company": company->name,
        "talk": *[_type == "talk" && ^._id in speakers[]._ref][0]{
          title,
          description
        },
        image
      }`

     
      export const getAllFellesskapQuery = groq`*[_type == "speaker" &&  (artisttype[0] == 'fellesskap' || artisttype[1] == 'fellesskap')]{
  
        name,
        bio,
        title,
        "slug": slug.current,
        twitter,
        github,
        "company": company->name,
        "talk": *[_type == "talk" && ^._id in speakers[]._ref][0]{
          title,
          description
        },
        image
      }`
 

export const getAllPostsQuery = groq`*[_type == "post"]{
        title,
        "slug": slug.current,
        excerpt,
        publishedAt,
        body,
        featuredImage
      }|order(publishedAt desc)`

export const getAllStagesQuery = groq`*[_type == "stage"]{
        name,
        "slug": slug.current,
        stream,
        discord,
        schedule[]->{
          title,
          start,
          end,
          speakers[]->{
            name,
            "slug": slug.current,
            image
          }
        }
      }`

export const getAllSponsorsQuery = groq`*[_type == "company"]{
        name,
        description,
        "slug": slug.current,
        website,
        callToAction,
        callToActionLink,
        discord,
        youtubeSlug,
        tier,
        links[]{
          url,
          text
        },
        cardImage ,
        logo
      }|order(rank desc)`

export const getAllJobsQuery = groq`*[_type == "job"]{
      _id,
      "companyName": company->name,
      title,
      description,
      discord,
      link,
      rank
    }|order(rank desc)|[0...100]`
