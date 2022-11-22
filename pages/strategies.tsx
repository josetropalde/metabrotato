import React from 'react'
import Head from 'next/head'
import Cards from '../components/styled/cards'
import Header from '../components/styled/header'
import { Container, DivAds, InArticleAds, Main, StickyAdLeft, StickyAdRight } from '../components/styled/sharedstyles'
import Title from '../components/styled/title'

import { useQuerySubscription } from "react-datocms";
import { request } from "../lib/datocms";
import Footer from '../components/styled/footer'
import styled from 'styled-components'
import { Adsense } from '@ctrl/react-adsense'


const PROJECTS_QUERY = `
query MyQuery {
  allCards(orderBy: tier_ASC, first: 100) {
    tier
    difficulty
    isnew
    name
    character {
      url
    }
    items {
      url
    }
    itemsearly {
      url
    }
    itemslate {
      url
    }
    weaponsearly {
      url
    }
    weaponslate {
      url
    }
    statsearly {
      url
    }
    statslate {
      url
    }
  }
  allWeapons(first: "100") {
    weaponName
    weaponImage {
      url
    }
    weaponDescription {
      value
    }
  }
}
`;

let skip = 0;

export async function getStaticProps(context) {

  const graphqlRequest: any = {
    query: PROJECTS_QUERY,
    includeDrafts: context.preview,
    variables: {skip: skip}
  };
  return {
    props: {
      subscription: context.preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
}
const Patch = styled.h2`
  font-size: 1rem;
  font-weight: normal;
`
const Strategies = ({subscription}) => {


  let allItems = [ 
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695817-acid.png"
        }
      ],
      "itemName": "Acid",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+8 Max HP\n-4% Dodge"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695822-alien_baby.png"
        }
      ],
      "itemName": "Alien Baby",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+15 Max HP\n+8 Enemy Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695826-alien_eyes.png"
        }
      ],
      "itemName": "Alien Eyes",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "Shoots +6 alien eyes around you every 5 seconds dealing (50% HP)"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695830-alien_magic.png"
        }
      ],
      "itemName": "Alien Magic",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+8 Max HP\n+3 HP Regeneration\n-8 Luck"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695834-alien_tongue.png"
        }
      ],
      "itemName": "Alien Tongue",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+30% pickup range"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695838-alien_worm.png"
        }
      ],
      "itemName": "Alien Worm",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+1 HP Regeneration\n-1 HP recovered from consumables\n+2 Max HP"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695843-alloy.png"
        }
      ],
      "itemName": "Alloy",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+3 Melee Damage\n+3 Ranged Damage\n+3 Engineering\n+5% Crit Chance\n-6% Dodge"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695848-baby_elephant.png"
        }
      ],
      "itemName": "Baby Elephant",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+20% chance to deal (10% Luck) damage to a random enemy when you pick up a material"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695852-baby_gecko-1.png"
        }
      ],
      "itemName": "Baby Gecko",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+15% chance to instantly attract a material when its dropped\n-1% Life Steal"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695860-baby_with_a_beard.png"
        }
      ],
      "itemName": "Baby with a Beard",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+1 bullet dealing (Ranged Damage) damage is fired from an enemy corpse when they die\n-40 Range"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695863-bag.png"
        }
      ],
      "itemName": "Bag",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+20 materials when you pick up a crate\n-1% Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735562-bandana.png"
        }
      ],
      "itemName": "Bandana",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "Projectiles pierce through +1 additional target\n-10% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735571-banner.png"
        }
      ],
      "itemName": "Banner",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+20 Range\n+10% Attack Speed\n-2% Life Steal"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735576-barricade.png"
        }
      ],
      "itemName": "Barricade",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+6 Armor while standing still.\n-8% Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735581-bat.png"
        }
      ],
      "itemName": "Bat",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+2% Life Steal\n-2 Harvesting"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735591-beanie.png"
        }
      ],
      "itemName": "Beanie",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+4% Speed\n-6 Range"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735587-bean_teacher.png"
        }
      ],
      "itemName": "Bean Teacher",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+30% XP Gain\n-2% Life Steal"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735595-big_arms.png"
        }
      ],
      "itemName": "Big Arms",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+10 Melee Damage\n+5 Ranged Damage\n-2 Armor\n-5% Spee"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735599-black_belt.png"
        }
      ],
      "itemName": "Black Belt",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+15% XP Gain\n+3 Melee Damage\n-8 Luck"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735602-blindfold.png"
        }
      ],
      "itemName": "Blindfold",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+5% Crit Chance\n+5% Dodge\n-15 Range"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735606-blood_donation.png"
        }
      ],
      "itemName": "Blood Donation",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+40 Harvesting\nTake +1 damage per second (does not give invulnerability time)"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735610-blood_leech.png"
        }
      ],
      "itemName": "Blood Leech",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+2% Life Steal\n+2 HP Regeneration\n-6 Harvesting"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735613-boiling_water.png"
        }
      ],
      "itemName": "Boiling Water",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+2 Elemental Damage\n-1 Max HP"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735617-book.png"
        }
      ],
      "itemName": "Book",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+1 Engineering"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735621-bowler_hat.png"
        }
      ],
      "itemName": "Bowler Hat",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+15 Luck\n+18 Harvesting\n-5% Attack Speed\n-3% Crit Chance"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735624-boxing_glove.png"
        }
      ],
      "itemName": "Boxing Glove",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+3 Knockback"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735628-broken_mouth.png"
        }
      ],
      "itemName": "Broken Mouth",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+5 Max HP\n-1 HP Regeneration"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735631-butterfly.png"
        }
      ],
      "itemName": "Butterfly",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+2% Life Steal\n-1 Elemental Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735635-cake.png"
        }
      ],
      "itemName": "Cake",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+3 Max HP\n-1% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735638-campfire.png"
        }
      ],
      "itemName": "Campfire",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+2 Elemental Damage\n+2 HP Regeneration\n-2% Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735642-candle.png"
        }
      ],
      "itemName": "Candle",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+4 Elemental Damage\n+1 HP Regeneration\n-10% Enemies\n-5% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735646-cape.png"
        }
      ],
      "itemName": "Cape",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+5% Life Steal\n+20% Dodge\n-2 Melee Damage\n-2 Ranged Damage\n-2 Elemental Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735649-chameleon.png"
        }
      ],
      "itemName": "Chameleon",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+20% Dodge while standing still.\n-6% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735653-charcoal.png"
        }
      ],
      "itemName": "Charcoal",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+1 Elemental Damage\n+2 Melee Damage\n-2 Harvesting"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735656-claw_tree.png"
        }
      ],
      "itemName": "Claw Tree",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+1 Melee Damage\n+3% Crit Chance\n-1 Max HP"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735660-clover.png"
        }
      ],
      "itemName": "Clover",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+20 Luck\n+6% Dodge\n-2% Life Steal"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735664-coffee.png"
        }
      ],
      "itemName": "Coffee",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+10% Attack Speed\n-2% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735668-cog.png"
        }
      ],
      "itemName": "Cog",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+4 Engineering\n-4% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735672-compass.png"
        }
      ],
      "itemName": "Compass",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+5% Speed\n+3 Engineering\n-3% Crit Chance"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735675-coupon.png"
        }
      ],
      "itemName": "Coupon",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "-6% Price"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735679-crown.png"
        }
      ],
      "itemName": "Crown",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+10 Harvesting\nHarvesting increases by an additional +10% at the end of a wave"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735682-cute_monkey.png"
        }
      ],
      "itemName": "Cute Monkey",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+8% chance to heal 1 HP when picking up a material\n-1 Ranged Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735686-cyberball.png"
        }
      ],
      "itemName": "Cyberball",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+15% chance to deal (25%) damage to a random enemy when an enemy dies"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735690-cyclops_worm.png"
        }
      ],
      "itemName": "Cyclops Worm",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+12% Damage\n-12 Range"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735693-dangerous_bunny.png"
        }
      ],
      "itemName": "Dangerous Bunny",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+1 free reroll in the shop"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735697-defective_steroids.png"
        }
      ],
      "itemName": "Defective Steroids",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+2 Melee Damage\n-3% Attack Speed\n+2 Max HP"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735701-diploma.png"
        }
      ],
      "itemName": "Diploma",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+10 Engineering\n+10% XP Gain\n-3 Max HP"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735705-duct_tape.png"
        }
      ],
      "itemName": "Duct Tape",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+1 Armor\n+1 Engineering\n-2 Max HP"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735708-dynamite.png"
        }
      ],
      "itemName": "Dynamite",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+15% Explosion Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735712-energy_bracelet.png"
        }
      ],
      "itemName": "Energy Bracelet",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+4% Crit Chance\n+2 Elemental Damage\n-2 Ranged Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735716-esty-s_couch.png"
        }
      ],
      "itemName": "Esty's Couch",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+2 HP Regeneration for every -1% Speed you have.\n+5 Max HP\n-15% Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735719-exoskeleton.png"
        }
      ],
      "itemName": "Exoskeleton",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+5 Armor\n+5% Crit Chance\n+5 Engineering\n+5% Speed\n-2 HP Regeneration\n-2% Life Steal"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735726-eyes_surgery.png"
        }
      ],
      "itemName": "Eyes Surgery",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "Burning activates +15%faster\n-12 Range"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735730-fertilizer.png"
        }
      ],
      "itemName": "Fertilizer",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+8 Harvesting\n-1 Melee Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735734-fin.png"
        }
      ],
      "itemName": "Fin",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+10% Speed\n+3% Life Steal\n-8 Luck"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735737-focus.png"
        }
      ],
      "itemName": "Focus",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+30% Damage\n-3% Attack Speed for every weapon you have."
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735740-fuel_tank.png"
        }
      ],
      "itemName": "Fuel Tank",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+4 Elemental Damage\n-1 Melee Damage\n-1 Ranged Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735744-gambling_token.png"
        }
      ],
      "itemName": "Gambling Token",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+8% Dodge\n-1 Armor"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735747-gentle_alien.png"
        }
      ],
      "itemName": "Gentle Alien",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+5% Damage\n+5% Enemies\n+2 Max HP"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735754-glasses.png"
        }
      ],
      "itemName": "Glasses",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+20 Range"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735750-glass_cannon.png"
        }
      ],
      "itemName": "Glass Cannon",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+25% Damage\n-3 Armor"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735758-gnome.png"
        }
      ],
      "itemName": "Gnome",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+10 Melee Damage\n+5 Elemental Damage\n-20 Range\n-20% pickup range"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735762-goat_skull-1.png"
        }
      ],
      "itemName": "Goat Skull",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+3 Melee Damage\n-2% Crit Chance"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736267-gummy_berserker.png"
        }
      ],
      "itemName": "Gummy Berserker",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+5% Attack Speed\n+15 Range\n-1 Armor"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736272-handcuffs.png"
        }
      ],
      "itemName": "Handcuffs",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+8 Melee Damage\n+8 Ranged Damage\n+8 Elemental Damage\nYour max HP is capped at its current value"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736276-head_injury.png"
        }
      ],
      "itemName": "Head Injury",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+6% Damage\n-8 Range"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736280-heavy_bullets.png"
        }
      ],
      "itemName": "Heavy Bullets",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+5 Ranged Damage\n+10% Damage\n+10 Range\n-10% Attack Speed\n-5% Crit Chance"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736284-hedgehog.png"
        }
      ],
      "itemName": "Hedgehog",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+2 Melee Damage\n+1 Ranged Damage\n-1 HP Regeneration"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736288-helmet.png"
        }
      ],
      "itemName": "Helmet",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+1 Armor\n-2% Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736292-hunting_trophy.png"
        }
      ],
      "itemName": "Hunting Trophy",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+50% chance to get 1 material when killing an enemy with a critical hit"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736299-injection.png"
        }
      ],
      "itemName": "Injection",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+7% Damage\n-2 Max HP"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736303-insanity.png"
        }
      ],
      "itemName": "Insanity",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+6% Crit Chance\n-3% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736307-jet_pack.png"
        }
      ],
      "itemName": "Jet Pack",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+15% Speed\n+10% Dodge\n-6 Max HP\n-2 Armor"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736311-landmines.png"
        }
      ],
      "itemName": "Landmines",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "A landmine spawns every 12 seconds dealing (100% Engineering) damage in an area"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736318-leather_vest.png"
        }
      ],
      "itemName": "Leather Vest",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+2 Armor\n+6% Dodge\n-3 Max HP"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736322-lemonade.png"
        }
      ],
      "itemName": "Lemonade",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+1 HP recovered from consumables"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736325-lens.png"
        }
      ],
      "itemName": "Lens",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+1 Ranged Damage\n-5 Range"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736328-little_frog.png"
        }
      ],
      "itemName": "Little Frog",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+20% pickup range\n+10 Harvesting\n-5% Dodge"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736332-little_muscley_dude.png"
        }
      ],
      "itemName": "Little Muscley Dude",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+3 Melee Damage\n+5 Max HP\n-15 Range"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736336-lost_duck.png"
        }
      ],
      "itemName": "Lost Duck",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+10 Luck\n-1 Elemental Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736340-lucky_charm.png"
        }
      ],
      "itemName": "Lucky Charm",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+30 Luck\n-2 Melee Damage\n-1 Ranged Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736343-lumberjack_shirt.png"
        }
      ],
      "itemName": "Lumberjack Shirt",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "Trees die in one hit"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736347-mammoth.png"
        }
      ],
      "itemName": "Mammoth",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+15 Melee Damage\n+2 HP Regeneration\n-8% Damage\n-3% Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736350-mastery.png"
        }
      ],
      "itemName": "Mastery",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+6 Melee Damage\n-3 Ranged Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736355-medal.png"
        }
      ],
      "itemName": "Medal",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+3 Max HP\n+3% Damage\n+1 Armor\n+3% Speed\n-4% Crit Chance"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736362-medikit.png"
        }
      ],
      "itemName": "Medikit",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+8 HP Regeneration\n-15 Luck"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736366-metal_detector.png"
        }
      ],
      "itemName": "Metal Detector",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+5% chance to double the value of picked up materials\n+6 Luck\n+2 Engineering\n-5% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736369-metal_plate.png"
        }
      ],
      "itemName": "Metal Plate",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+2 Armor\n-3% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736373-missile.png"
        }
      ],
      "itemName": "Missile",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+10% Damage\n-6% Attack Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736376-mouse.png"
        }
      ],
      "itemName": "Mouse",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+5% Life Steal\n+10% Enemies\n-5 Harvesting"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736380-mushroom.png"
        }
      ],
      "itemName": "Mushroom",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+2 HP Regeneration\n-3 Luck"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736383-mutation.png"
        }
      ],
      "itemName": "Mutation",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+1 Ranged Damage\n+1 Elemental Damage\n-3% Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736386-night_goggles.png"
        }
      ],
      "itemName": "Night Goggles",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+15% Crit Chance\n+50 Range\n-3 Max HP\n-2 Armor"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736391-octopus.png"
        }
      ],
      "itemName": "Octopus",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+12 Max HP\n+5% Life Steal\n-8% Crit Chance"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736395-padding.png"
        }
      ],
      "itemName": "Padding",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+1% Attack Speed for every 1% Dodge you have.\n-5% Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736398-panda.png"
        }
      ],
      "itemName": "Panda",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+12 Max HP\n+25 Luck\n-12% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736402-peaceful_bee.png"
        }
      ],
      "itemName": "Peaceful Bee",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+4% Dodge\n+4 Harvesting\n-1 Melee Damage\n-1 Ranged Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736406-pencil.png"
        }
      ],
      "itemName": "Pencil",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+2 Engineering\n-1% Attack Speed\n-1% Crit Chance"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736409-piggy_bank.png"
        }
      ],
      "itemName": "Piggy Bank",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+20% of your materials at the start of waves"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736413-plant.png"
        }
      ],
      "itemName": "Plant",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+2 HP Regeneration\n-1% Life Steal"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736417-plastic_explosive.png"
        }
      ],
      "itemName": "Plastic Explosive",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+25% Explosion Size"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736420-poisonous_tonic.png"
        }
      ],
      "itemName": "Poisonous Tonic",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+10% Attack Speed\n+8% Crit Chance\n+15 Range\n-2 HP Regeneration"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736424-potato.png"
        }
      ],
      "itemName": "Potato",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+3 Max HP\n+1 HP Regeneration\n+3% Damage\n+3% Speed\n+5 Luck"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736428-power_generator.png"
        }
      ],
      "itemName": "Power Generator",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+1% Attack Speed for every 1% Dodge you have.\n-5% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736431-propeller_hat.png"
        }
      ],
      "itemName": "Propeller Hat",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+10 Luck\n-2% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736435-pumpkin.png"
        }
      ],
      "itemName": "Pumpkin",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "url": "https://brotato.wiki.spellsandguns.com/Pumpkin",
                    "meta": [
                      {
                        "id": "title",
                        "value": "Pumpkin"
                      }
                    ],
                    "type": "link",
                    "children": [
                      {
                        "type": "span",
                        "marks": [
                          "strong"
                        ],
                        "value": "Pumpkin"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736439-recycling_machine.png"
        }
      ],
      "itemName": "Recycling Machine",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "Gain +35% more materials from recycling items"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736443-retromation-s_hoodie.png"
        }
      ],
      "itemName": "Retromation's Hoodie",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+2% Attack Speed for every 1% Dodge you have.\n+10% Dodge\n-50 Range"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736447-ricochet.png"
        }
      ],
      "itemName": "Ricochet",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "Your projectiles gain +1 bounce\n-50% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736450-rip_and_tear.png"
        }
      ],
      "itemName": "Rip and Tear",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "Enemies have a +10% chance to explode for (50% Melee Damage) damage when they die\n-12 Harvesting"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736454-ritual.png"
        }
      ],
      "itemName": "Ritual",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+6% Damage\n+2% Life Steal\n-2 Engineering"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736458-robot_arm.png"
        }
      ],
      "itemName": "Robot Arm",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+6 Armor\n+6 Engineering\n-3 HP Regeneration\n-3% Life Steal"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736461-sad_tomato.png"
        }
      ],
      "itemName": "Sad Tomato",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+8 HP Regeneration\nStart waves with -50% HP"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736465-scar.png"
        }
      ],
      "itemName": "Scar",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+15% XP Gain\n-8 Range"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736469-scared_sausage.png"
        }
      ],
      "itemName": "Scared Sausage",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "Attacks have a +25% chance to deal 1x3(Elemental Damage) burning damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736473-scope.png"
        }
      ],
      "itemName": "Scope",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+2 Ranged Damage\n+25 Range\n-7% Attack Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736476-shady_potion.png"
        }
      ],
      "itemName": "Shady Potion",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+20 Luck\n-2 HP Regeneration"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736480-shmoop.png"
        }
      ],
      "itemName": "Shmoop",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+6 Max HP\n+2 HP Regeneration\n-2 Melee Damage\n-1 Ranged Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736484-sifd-s_relic.png"
        }
      ],
      "itemName": "Sifd's Relic",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+100% chance to instantly attract a material when its dropped\n-12% Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736487-small_magazine.png"
        }
      ],
      "itemName": "Small Magazine",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+2 Ranged Damage\n+10% Attack Speed\n-10% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736491-snail.png"
        }
      ],
      "itemName": "Snail",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "-10 Enemy Speed\n-5% Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736495-snake.png"
        }
      ],
      "itemName": "Snake",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "Burning spreads to a nearby enemy\n-1 Max HP"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736498-spider.png"
        }
      ],
      "itemName": "Spider",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+12% Damage\n+5% Attack Speed for every unique weapon you have\n-6% Dodge\n-8 Harvesting"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736502-statue.png"
        }
      ],
      "itemName": "Statue",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+25% Damage while standing still.\n-10% Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736505-sunglasses.png"
        }
      ],
      "itemName": "Sunglasses",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+10% Crit Chance\n-1 Armor"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736509-terrified_onion.png"
        }
      ],
      "itemName": "Terrified Onion",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+4% Speed\n-6 Luck"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736514-toolbox.png"
        }
      ],
      "itemName": "Toolbox",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+6 Engineering\n-8% Attack Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736517-torture.png"
        }
      ],
      "itemName": "Torture",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+10 Max HP\nRestore +3 HP per second. Cannot heal any other way."
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736521-toxic_sludge.png"
        }
      ],
      "itemName": "Toxic Sludge",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+2 Elemental Damage\n-2% Dodge"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736525-tractor.png"
        }
      ],
      "itemName": "Tractor",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+60 Harvesting\n-10% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736529-tree.png"
        }
      ],
      "itemName": "Tree",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "More trees spawn"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736532-triangle_of_power.png"
        }
      ],
      "itemName": "Triangle of Power",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+20% Damage\n+1 Armor\n-2% Damage until the end of the wave when you take damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736536-turret.png"
        }
      ],
      "itemName": "Turret",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "Spawns a turret that shoots bullets dealing (80% Engineering) damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736296-incendiary_turret.png"
        }
      ],
      "itemName": "Incendiary Turret",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "Spawns a turret that shoots flames dealing (25% Engineering) damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736358-medical_turret.png"
        }
      ],
      "itemName": "Medical Turret",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "Spawns a medical turret that shoots bullets healing (10% Engineering) HP"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736315-laser_turret.png"
        }
      ],
      "itemName": "Laser Turret",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "Spawns a turret that shoots piercing bullets dealing (150% Engineering) damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735723-explosive_turret.png"
        }
      ],
      "itemName": "Explosive Turret",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "Spawns a turret that shoots explosive bullets dealing (175% Engineering) damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736540-tyler.png"
        }
      ],
      "itemName": "Tyler",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "Spawns a little guy that slowly shoots piercing lightning projectiles around him for (100% Engineering) damage each"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736544-ugly_tooth.png"
        }
      ],
      "itemName": "Ugly Tooth",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "Hitting an enemy removes +10% of their speed Max: 30%\n-3% Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736547-vigilante_ring.png"
        }
      ],
      "itemName": "Vigilante Ring",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+3% Damage at the end of a wave (stacking)"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736552-wandering_bot.png"
        }
      ],
      "itemName": "Wandering Bot",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "Spawns a little bot that slows down nearby enemies"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736555-warrior_helmet.png"
        }
      ],
      "itemName": "Warrior Helmet",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+3 Armor\n+5 Max HP\n-10% Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736559-weird_food.png"
        }
      ],
      "itemName": "Weird Food",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+2 HP recovered from consumables\n-2% Dodge"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736563-weird_ghost.png"
        }
      ],
      "itemName": "Weird Ghost",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+3 Max HP\nStart the next wave with 1 HP"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736566-wheat.png"
        }
      ],
      "itemName": "Wheat",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+4 Melee Damage\n+2 Ranged Damage\n+10 Harvesting\n-2 Elemental Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736570-wheelbarrow.png"
        }
      ],
      "itemName": "Wheelbarrow",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "-1 Armor\n+16 Harvesting"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736573-whetstone.png"
        }
      ],
      "itemName": "Whetstone",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+4% Life Steal\n-3 Knockback"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736577-white_flag.png"
        }
      ],
      "itemName": "White Flag",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+5 Harvesting\n-5% Enemies"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736582-wings.png"
        }
      ],
      "itemName": "Wings",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+10% Speed\n+30 Range\n-2 Elemental Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736586-wisdom.png"
        }
      ],
      "itemName": "Wisdom",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+5 damage every 5 seconds\n-20% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736589-wolf_helmet.png"
        }
      ],
      "itemName": "Wolf Helmet",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+8 Elemental Damage\n+15 Luck\n-5 Engineering"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1667238386-explosive_shells.png"
        }
      ],
      "itemName": "Explosive Shells",
      "itemDescription": {
        "value": {
          "schema": "dast",
          "document": {
            "type": "root",
            "children": [
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+60% Explosion Damage\n-15% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  ];

  const { data, error, status } = useQuerySubscription(subscription)

  return (  
  <>
    <Head>
      <title>Brotato Meta Best Strategies - MetaBrotato</title>
      
      <meta name="title" content="Brotato Meta Best Strategies - MetaBrotato"></meta>
      <meta
        name="description"
        content="Discover best Brotato Strategies, Guides and Builds to win more runs on Brotato with the best builds of the meta - MetaBrotato."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.metabrotato.com/strategies" />
      <meta property="og:title" content="Brotato Meta Best Strategies - MetaBrotato" /> 
      <meta property="og:description" content="Discover best Brotato Strategies, Guides and Builds to win more runs on Brotato with the best builds of the meta" />
      <meta property="og:image" content="/strategies.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.metabrotato.com/strategies" />
      <meta property="twitter:title" content="Brotato Meta Best Strategies - MetaBrotato" />
      <meta property="twitter:description" content="Discover best Brotato Strategies, Guides and Builds to win more runs on Brotato with the best builds of the meta" />
      <meta property="twitter:image" content="/strategies.png"></meta>
    </Head>

    <Header />
    <DivAds>
      <Adsense
        className='adsbygoogle'
        client="ca-pub-2203319803462882"
        slot="6353395675"
        style={{ display: 'block', height: '300px' }}
        layout="in-article"
        format="fluid"
        responsive='true'
      />
    </DivAds>

    <StickyAdLeft>
      <Adsense
          client="ca-pub-2203319803462882"
          slot="8115163353"
          style={{ display: 'block', width: '250px', height: '700px'  }}
          format="auto"
        />
    </StickyAdLeft>

    <StickyAdRight>
      <Adsense
          client="ca-pub-2203319803462882"
          slot="2870892765"
          style={{ display: 'block', width: '250px', height: '700px'  }}
          format="auto"
        />

    </StickyAdRight>

    <Main>
      <Title text="Best Strategys" />
      <Patch>Patch 0.6.0.7</Patch>
      <Container>
        {data.allCards.map((card, index) => {
          return (
            <>
            <Cards 
            tier={card.tier} 
            name={card.name} 
            character={card.character} 
            weapons={card.items}
            isNew={card.isnew}
            difficulty={card.difficulty}

            allItems={allItems}
            allWeapons={data.allWeapons}
            itemsEarly={card.itemsearly}
            weaponsEarly={card.weaponsearly}
            statsEarly={card.statsearly}

            itemsLate={card.itemslate}
            weaponsLate={card.weaponslate}
            statsLate={card.statslate}
            key={index}/>

            <InArticleAds style={{display: index % 5 == 1 ? 'block' : 'none'}}>
              <Adsense
                className='adsbygoogle'
                client="ca-pub-2203319803462882"
                slot="6666420125"
                style={{ display: 'block', textAlign: 'center'}}
                layout="in-article"
                format="fluid"
              />
              <Adsense
                className='adsbygoogle'
                client="ca-pub-2203319803462882"
                slot="6666420125"
                style={{ display: 'block', textAlign: 'center', marginTop: 16}}
                layout="in-article"
                format="fluid"
              />
            </InArticleAds> 
            </>
          )
        })}
      </Container>
    </Main>

    <DivAds>
      <Adsense
        className='adsbygoogle'
        client="ca-pub-2203319803462882"
        slot="9274904617"
        style={{ display: 'block' }}
        layout="in-article"
        format="fluid"
        responsive='true'
      />
    </DivAds>
    
    <Footer />
  </>
  )
}
export default Strategies;