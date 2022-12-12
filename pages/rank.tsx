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
  allCards(first: 100, orderBy: vote_ASC) {
    tier
    id
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
  allCharacters(first: "100") {
    characterDescription {
      value
    }
    characterName
    characterImage {
      url
    }
  }
}
`;

export async function getStaticProps(context) {

  const graphqlRequest: any = {
    query: PROJECTS_QUERY,
    includeDrafts: context.preview,
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
const Rank = ({subscription}) => {

  const { data, error, status } = useQuerySubscription(subscription)


  let allItems = [ 
    {
      "itemName": "Medikit",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736362-medikit.png"
        }
      ],
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
                    "value": "+10 HP Regeneration\n-10 Luck"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Focus",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735737-focus.png"
        }
      ],
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
                    "value": "+30% Damage\n-3% Attack Speed for every different weapon you have."
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Small Magazine",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736487-small_magazine.png"
        }
      ],
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
                    "value": "+2 Ranged Damage\n+10% Attack Speed\n-6% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Poisonous Tonic",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736420-poisonous_tonic.png"
        }
      ],
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
                    "value": "+10% Attack Speed\n+5% Crit Chance\n+15 Range\n-2 HP Regeneration"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Retromation's Hoodie",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736443-retromation-s_hoodie.png"
        }
      ],
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
                    "value": "+2% Attack Speed for every 1% Dodge you have.\n-80 Range"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Eyes Surgery",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735726-eyes_surgery.png"
        }
      ],
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
                    "value": "Burning activates +10% faster\n-10 Range"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Torture",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736517-torture.png"
        }
      ],
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
                    "value": "+15 Max HP\nRestore +4 HP per second. Cannot heal any other way."
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Barricade",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735576-barricade.png"
        }
      ],
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
                    "value": "+8 Armor while standing still.\n-5% Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Chameleon",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735649-chameleon.png"
        }
      ],
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
                    "value": "+20% Dodge while standing still.\n-4% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Spider",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736498-spider.png"
        }
      ],
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
                    "value": "+12% Damage\n+6% per different weapon you have\n-6% Dodge\n-8 Harvesting"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Alien Worm",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695838-alien_worm.png"
        }
      ],
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
                    "value": "+2 HP Regeneration\n-1 HP recovered from consumables\n+3 Max HP"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Rip and Tear",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736450-rip_and_tear.png"
        }
      ],
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
                    "value": "Enemies have a +20% chance to explode for (50% Melee Damage) damage when they die\n-12 Harvesting"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Padding",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736395-padding.png"
        }
      ],
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
                    "value": "+1 Max HP for every 100 Materials you have.\n-5% Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Bag",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695863-bag.png"
        }
      ],
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
                    "value": "+15 materials when you pick up a crate\n-1% Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Tardigrade",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1670724187-tardigrade.png"
        }
      ],
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
                    "value": "Nullifies the damage of one hit taken every wave"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Strange Book",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1670724171-strange_book.png"
        }
      ],
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
                    "value": "+1 Engineering for every 1 Elemental Damage you have\n-1 Melee Damage\n-1 Ranged Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Community Support",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1670724128-community_support.png"
        }
      ],
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
                    "value": "+1% Attack Speed for every current living enemy\n-2 Armor"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Grind's Magical Leaf",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1670724099-grind-s_magical_leaf.png"
        }
      ],
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
                    "value": "+1 Max HP at the end of a wave"
                  }
                ]
              },
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+1 HP Regeneration at the end of a wave"
                  }
                ]
              },
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+1 % Life Steal at the end of a wave"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Regeneration Potion",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1670724068-regeneration_potion.png"
        }
      ],
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
                    "value": "HP Regeneration is double when you have less than 50% health"
                  }
                ]
              },
              {
                "type": "paragraph",
                "children": [
                  {
                    "type": "span",
                    "value": "+3 HP Regeneration"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Anvil",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1670724057-anvil.png"
        }
      ],
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
                    "value": "A random weapon is upgraded when entering a shop. If you have no weapon to uprgade, you gain +2 Armor instead."
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Ricochet",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736447-ricochet.png"
        }
      ],
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
                    "value": "Your projectiles gain +1 bounce\n-35% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Snail",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736491-snail.png"
        }
      ],
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
                    "value": "-5 Enemy Speed\n-3% Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Alien Baby",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695822-alien_baby.png"
        }
      ],
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
                    "value": "+15 Max HP\n+8% Enemy Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Hunting Trophy",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736292-hunting_trophy.png"
        }
      ],
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
                    "value": "+33% chance to get 1 material when killing an enemy with a critical hit"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Coupon",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735675-coupon.png"
        }
      ],
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
                    "value": "-5% Price"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Crown",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735679-crown.png"
        }
      ],
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
                    "value": "Harvesting increases by an additional +8% at the end of a wave (stacking)"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Tractor",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736525-tractor.png"
        }
      ],
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
                    "value": "+40 Harvesting\n-8% Damage"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Potato",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736424-potato.png"
        }
      ],
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
                    "value": "+3 Max HP\n+1 HP Regeneration\n+1% Life Steal\n+3% Damage\n+3% Speed\n+3% Dodge\n+1 Armor\n+5 Luck"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Warrior Helmet",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736555-warrior_helmet.png"
        }
      ],
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
                    "value": "+3 Armor\n+5 Max HP\n-5% Speed"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "itemName": "Acid",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695817-acid.png"
        }
      ],
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
      "itemName": "Alien Eyes",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695826-alien_eyes.png"
        }
      ],
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
      "itemName": "Alien Magic",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695830-alien_magic.png"
        }
      ],
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
      "itemName": "Alien Tongue",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695834-alien_tongue.png"
        }
      ],
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
      "itemName": "Alloy",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695843-alloy.png"
        }
      ],
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
      "itemName": "Baby Elephant",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695848-baby_elephant.png"
        }
      ],
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
      "itemName": "Baby Gecko",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695852-baby_gecko-1.png"
        }
      ],
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
      "itemName": "Baby with a Beard",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666695860-baby_with_a_beard.png"
        }
      ],
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
      "itemName": "Explosive Shells",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1667238386-explosive_shells.png"
        }
      ],
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
    },
    {
      "itemName": "Wolf Helmet",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736589-wolf_helmet.png"
        }
      ],
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
      "itemName": "Wisdom",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736586-wisdom.png"
        }
      ],
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
      "itemName": "Wings",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736582-wings.png"
        }
      ],
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
      "itemName": "White Flag",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736577-white_flag.png"
        }
      ],
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
      "itemName": "Whetstone",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736573-whetstone.png"
        }
      ],
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
      "itemName": "Wheelbarrow",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736570-wheelbarrow.png"
        }
      ],
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
      "itemName": "Wheat",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736566-wheat.png"
        }
      ],
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
      "itemName": "Weird Ghost",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736563-weird_ghost.png"
        }
      ],
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
      "itemName": "Weird Food",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736559-weird_food.png"
        }
      ],
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
      "itemName": "Wandering Bot",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736552-wandering_bot.png"
        }
      ],
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
      "itemName": "Vigilante Ring",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736547-vigilante_ring.png"
        }
      ],
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
      "itemName": "Ugly Tooth",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736544-ugly_tooth.png"
        }
      ],
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
      "itemName": "Tyler",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736540-tyler.png"
        }
      ],
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
      "itemName": "Explosive Turret",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735723-explosive_turret.png"
        }
      ],
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
      "itemName": "Laser Turret",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736315-laser_turret.png"
        }
      ],
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
      "itemName": "Medical Turret",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736358-medical_turret.png"
        }
      ],
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
      "itemName": "Incendiary Turret",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736296-incendiary_turret.png"
        }
      ],
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
      "itemName": "Turret",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736536-turret.png"
        }
      ],
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
      "itemName": "Triangle of Power",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736532-triangle_of_power.png"
        }
      ],
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
      "itemName": "Tree",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736529-tree.png"
        }
      ],
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
      "itemName": "Toxic Sludge",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736521-toxic_sludge.png"
        }
      ],
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
      "itemName": "Toolbox",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736514-toolbox.png"
        }
      ],
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
      "itemName": "Terrified Onion",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736509-terrified_onion.png"
        }
      ],
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
      "itemName": "Sunglasses",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736505-sunglasses.png"
        }
      ],
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
      "itemName": "Statue",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736502-statue.png"
        }
      ],
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
      "itemName": "Snake",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736495-snake.png"
        }
      ],
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
      "itemName": "Sifd's Relic",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736484-sifd-s_relic.png"
        }
      ],
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
      "itemName": "Shmoop",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736480-shmoop.png"
        }
      ],
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
      "itemName": "Shady Potion",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736476-shady_potion.png"
        }
      ],
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
      "itemName": "Scope",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736473-scope.png"
        }
      ],
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
      "itemName": "Scared Sausage",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736469-scared_sausage.png"
        }
      ],
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
      "itemName": "Scar",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736465-scar.png"
        }
      ],
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
      "itemName": "Sad Tomato",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736461-sad_tomato.png"
        }
      ],
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
      "itemName": "Robot Arm",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736458-robot_arm.png"
        }
      ],
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
      "itemName": "Ritual",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736454-ritual.png"
        }
      ],
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
      "itemName": "Recycling Machine",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736439-recycling_machine.png"
        }
      ],
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
      "itemName": "Pumpkin",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736435-pumpkin.png"
        }
      ],
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
      "itemName": "Propeller Hat",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736431-propeller_hat.png"
        }
      ],
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
      "itemName": "Power Generator",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736428-power_generator.png"
        }
      ],
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
      "itemName": "Plastic Explosive",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736417-plastic_explosive.png"
        }
      ],
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
      "itemName": "Plant",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736413-plant.png"
        }
      ],
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
      "itemName": "Piggy Bank",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736409-piggy_bank.png"
        }
      ],
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
      "itemName": "Pencil",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736406-pencil.png"
        }
      ],
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
      "itemName": "Peaceful Bee",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736402-peaceful_bee.png"
        }
      ],
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
      "itemName": "Panda",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736398-panda.png"
        }
      ],
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
      "itemName": "Octopus",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736391-octopus.png"
        }
      ],
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
      "itemName": "Night Goggles",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736386-night_goggles.png"
        }
      ],
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
      "itemName": "Mutation",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736383-mutation.png"
        }
      ],
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
      "itemName": "Mushroom",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736380-mushroom.png"
        }
      ],
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
      "itemName": "Mouse",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736376-mouse.png"
        }
      ],
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
      "itemName": "Missile",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736373-missile.png"
        }
      ],
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
      "itemName": "Metal Plate",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736369-metal_plate.png"
        }
      ],
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
      "itemName": "Metal Detector",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736366-metal_detector.png"
        }
      ],
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
      "itemName": "Medal",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736355-medal.png"
        }
      ],
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
      "itemName": "Mastery",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736350-mastery.png"
        }
      ],
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
      "itemName": "Mammoth",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736347-mammoth.png"
        }
      ],
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
      "itemName": "Lumberjack Shirt",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736343-lumberjack_shirt.png"
        }
      ],
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
      "itemName": "Lucky Charm",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736340-lucky_charm.png"
        }
      ],
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
      "itemName": "Lost Duck",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736336-lost_duck.png"
        }
      ],
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
      "itemName": "Little Muscley Dude",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736332-little_muscley_dude.png"
        }
      ],
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
      "itemName": "Little Frog",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736328-little_frog.png"
        }
      ],
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
      "itemName": "Lens",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736325-lens.png"
        }
      ],
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
      "itemName": "Lemonade",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736322-lemonade.png"
        }
      ],
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
      "itemName": "Leather Vest",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736318-leather_vest.png"
        }
      ],
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
      "itemName": "Landmines",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736311-landmines.png"
        }
      ],
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
      "itemName": "Jet Pack",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736307-jet_pack.png"
        }
      ],
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
      "itemName": "Insanity",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736303-insanity.png"
        }
      ],
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
      "itemName": "Injection",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736299-injection.png"
        }
      ],
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
      "itemName": "Helmet",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736288-helmet.png"
        }
      ],
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
      "itemName": "Hedgehog",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736284-hedgehog.png"
        }
      ],
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
      "itemName": "Heavy Bullets",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736280-heavy_bullets.png"
        }
      ],
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
      "itemName": "Head Injury",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736276-head_injury.png"
        }
      ],
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
      "itemName": "Handcuffs",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736272-handcuffs.png"
        }
      ],
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
      "itemName": "Gummy Berserker",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666736267-gummy_berserker.png"
        }
      ],
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
      "itemName": "Goat Skull",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735762-goat_skull-1.png"
        }
      ],
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
      "itemName": "Gnome",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735758-gnome.png"
        }
      ],
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
      "itemName": "Glass Cannon",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735750-glass_cannon.png"
        }
      ],
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
      "itemName": "Glasses",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735754-glasses.png"
        }
      ],
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
      "itemName": "Gentle Alien",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735747-gentle_alien.png"
        }
      ],
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
      "itemName": "Gambling Token",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735744-gambling_token.png"
        }
      ],
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
      "itemName": "Fuel Tank",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735740-fuel_tank.png"
        }
      ],
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
      "itemName": "Fin",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735734-fin.png"
        }
      ],
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
      "itemName": "Fertilizer",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735730-fertilizer.png"
        }
      ],
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
      "itemName": "Exoskeleton",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735719-exoskeleton.png"
        }
      ],
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
      "itemName": "Esty's Couch",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735716-esty-s_couch.png"
        }
      ],
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
      "itemName": "Energy Bracelet",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735712-energy_bracelet.png"
        }
      ],
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
      "itemName": "Dynamite",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735708-dynamite.png"
        }
      ],
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
      "itemName": "Duct Tape",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735705-duct_tape.png"
        }
      ],
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
      "itemName": "Diploma",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735701-diploma.png"
        }
      ],
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
      "itemName": "Defective Steroids",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735697-defective_steroids.png"
        }
      ],
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
      "itemName": "Dangerous Bunny",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735693-dangerous_bunny.png"
        }
      ],
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
      "itemName": "Cyclops Worm",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735690-cyclops_worm.png"
        }
      ],
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
      "itemName": "Cyberball",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735686-cyberball.png"
        }
      ],
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
      "itemName": "Cute Monkey",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735682-cute_monkey.png"
        }
      ],
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
      "itemName": "Compass",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735672-compass.png"
        }
      ],
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
      "itemName": "Cog",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735668-cog.png"
        }
      ],
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
      "itemName": "Coffee",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735664-coffee.png"
        }
      ],
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
      "itemName": "Clover",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735660-clover.png"
        }
      ],
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
      "itemName": "Claw Tree",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735656-claw_tree.png"
        }
      ],
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
      "itemName": "Charcoal",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735653-charcoal.png"
        }
      ],
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
      "itemName": "Cape",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735646-cape.png"
        }
      ],
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
      "itemName": "Candle",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735642-candle.png"
        }
      ],
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
      "itemName": "Campfire",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735638-campfire.png"
        }
      ],
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
      "itemName": "Cake",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735635-cake.png"
        }
      ],
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
      "itemName": "Butterfly",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735631-butterfly.png"
        }
      ],
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
      "itemName": "Broken Mouth",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735628-broken_mouth.png"
        }
      ],
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
      "itemName": "Boxing Glove",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735624-boxing_glove.png"
        }
      ],
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
      "itemName": "Bowler Hat",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735621-bowler_hat.png"
        }
      ],
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
      "itemName": "Book",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735617-book.png"
        }
      ],
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
      "itemName": "Boiling Water",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735613-boiling_water.png"
        }
      ],
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
      "itemName": "Blood Leech",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735610-blood_leech.png"
        }
      ],
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
      "itemName": "Blood Donation",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735606-blood_donation.png"
        }
      ],
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
      "itemName": "Blindfold",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735602-blindfold.png"
        }
      ],
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
      "itemName": "Black Belt",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735599-black_belt.png"
        }
      ],
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
      "itemName": "Big Arms",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735595-big_arms.png"
        }
      ],
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
      "itemName": "Bean Teacher",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735587-bean_teacher.png"
        }
      ],
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
      "itemName": "Beanie",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735591-beanie.png"
        }
      ],
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
      "itemName": "Bat",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735581-bat.png"
        }
      ],
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
      "itemName": "Banner",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735571-banner.png"
        }
      ],
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
      "itemName": "Bandana",
      "itemImage": [
        {
          "url": "https://www.datocms-assets.com/84301/1666735562-bandana.png"
        }
      ],
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
    }
  ];
 
  return (  
  <>
    <Head>
      <title>Rank of the Best Strategies - MetaBrotato</title>
      
      <meta name="title" content="Rank of the Best Strategies - MetaBrotato"></meta>
      <meta
        name="description"
        content="Discover best Brotato Strategies, Guides and Builds to win more runs on Brotato with the best builds of the meta - MetaBrotato."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.metabrotato.com/rank" />
      <meta property="og:title" content="Brotato Meta Best Strategies - MetaBrotato" /> 
      <meta property="og:description" content="Discover best Brotato Strategies, Guides and Builds to win more runs on Brotato with the best builds of the meta" />
      <meta property="og:image" content="/strategies.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.metabrotato.com/rank" />
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
        style={{ display: 'block' }}
        layout="in-article"
        format="auto"
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
      <Title text="Ranks - Beta" />
      <Patch>Patch 0.6.1.6</Patch>
      <Container>
        {data.allCards.map((card, index) => {
          return (
            <>
            <Cards 
                rank={true}
                tier={card.tier}
                name={card.name}
                character={card.character}
                weapons={card.items}
                isNew={card.isnew}
                difficulty={card.difficulty}

                cardID={card.name}

                allItems={allItems}
                allWeapons={data.allWeapons}
                allCharacters={data.allCharacters}

                itemsEarly={card.itemsearly}
                weaponsEarly={card.weaponsearly}
                statsEarly={card.statsearly}

                itemsLate={card.itemslate}
                weaponsLate={card.weaponslate}
                statsLate={card.statslate}
                key={index}            
            />

            <InArticleAds style={{display: index % 4 == 1 ? 'block' : 'none'}}>
              <Adsense
                className='adsbygoogle'
                client="ca-pub-2203319803462882"
                slot="6666420125"
                style={{ display: 'block', textAlign: 'center'}}
                layout="in-article"
                format="auto"
              />
              <Adsense
                className='adsbygoogle'
                client="ca-pub-2203319803462882"
                slot="6666420125"
                style={{ display: 'block', textAlign: 'center', marginTop: 16}}
                layout="in-article"
                format="auto"
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
        format="auto"
        responsive='true'
      />
    </DivAds>
    
    <Footer />
  </>
  )
}
export default Rank;