export default {
  name: 'speaker',
  type: 'document',
  title: 'Bidragsyter',
  preview: {
    select: {
      title: 'name',
      company: 'company.name',
      professionalTitle: 'title',
      media: 'image'
    },
    prepare: ({ title, company = '', professionalTitle = '', media }) => {
      return {
        title,
        media,
        subtitle: `${professionalTitle} @ ${company}`
      }
    }
  },
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'bio',
      type: 'bodyPortableText',
      title: 'Biography'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name'
      }
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
    {
      title: 'Type bidragsyter',
      name: 'artisttype',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Musikk', value: 'musikk'},
          {title: 'Kunst', value: 'kunst'},
          {title: 'Felleskap', value: 'fellesskap'},
          {title: 'Framtid', value: 'framtid'}
        ]
      }
    },
    {
      name: 'title',
      type: 'string',
      title: 'Kort slagord'
    },
    {
      name: 'twitter',
      type: 'string',
      title: 'Instagram'
    },
    {
      name: 'github',
      type: 'string',
      title: 'Facebook'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Bilde',
      options: {
        hotspot: true
      }
    }
  ]
}
