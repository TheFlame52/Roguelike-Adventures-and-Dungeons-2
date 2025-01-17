// priority: 0

console.info('Starting recipe modification scripts...')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
event.create('mark_miner').displayName('I. Mark of the Miner').glow(true)

event.create('mark_farmer').displayName('I. Mark of the Farmer').glow(true)
event.create('mark_warrior').displayName('I. Mark of the Warrior').glow(true)
event.create('mark_archer').displayName('I. Mark of the Archer').glow(true)
event.create('mark_wizard').displayName('I. Mark of the Wizard').glow(true)
event.create('mark_pirate').displayName('I. Mark of the Pirate').glow(true)
event.create('mark_thief').displayName('I. Mark of the Thief').glow(true)
event.create('mark_huntsman').displayName('I. Mark of the Huntsman').glow(true)
event.create('mark_healer').displayName('I. Mark of the Healer').glow(true)
event.create('mark_pitfighter').displayName('I. Mark of the Pitfighter').glow(true)
event.create('mark_tamer').displayName('I. Mark of the Tamer').glow(true)

event.create('mark_spelunker').displayName('II. Mark of the Spelunker').glow(true)
event.create('mark_rancher').displayName('II. Mark of the Rancher').glow(true)
event.create('mark_mercenary').displayName('II. Mark of the Mercenary').glow(true) 
event.create('mark_arbalester').displayName('II. Mark of the Arbalester').glow(true) 
event.create('mark_alchemist').displayName('II. Mark of the Alchemist').glow(true) 
event.create('mark_corsair').displayName('II. Mark of the Corsair').glow(true)
event.create('mark_bandit').displayName('II. Mark of the Bandit').glow(true)
event.create('mark_tracker').displayName('II. Mark of the Tracker').glow(true) 
event.create('mark_spiritualist').displayName('II. Mark of the Spiritualist').glow(true) 
event.create('mark_fighter').displayName('II. Mark of the Fighter').glow(true)
event.create('mark_summoner').displayName('II. Mark of the Summoner').glow(true)

event.create('mark_cavemaster').displayName('III. Mark of the Cavemaster').glow(true)
event.create('mark_agrarian').displayName('III. Mark of the Agrarian').glow(true)
event.create('mark_champion').displayName('III. Mark of the Champion').glow(true)
event.create('mark_artillerist').displayName('III. Mark of the Artillerist').glow(true)
event.create('mark_thaumaturge').displayName('III. Mark of the Thaumaturge').glow(true)
event.create('mark_captain').displayName('III. Mark of the Captain').glow(true)
event.create('mark_rogue').displayName('III. Mark of the Rogue').glow(true)
event.create('mark_pursuer').displayName('III. Mark of the Pursuer').glow(true)
event.create('mark_shaman').displayName('III. Mark of the Shaman').glow(true)
event.create('mark_underdog').displayName('III. Mark of the Underdog').glow(true)
event.create('mark_beastmaster').displayName('III. Mark of the Beastmaster').glow(true)

event.create('arrow_down').displayName('Green Arrow Down Icon')
event.create('arrow_down_yellow').displayName('Yellow Arrow Down Icon')
event.create('arrow_up').displayName('Arrow Up Icon')

event.create('copper_coin').displayName('Copper Coin').tooltip('Acquired through quests')
event.create('iron_coin').displayName('Iron Coin').tooltip('Acquired through quests')
event.create('gold_coin').displayName('Gold Coin').tooltip('Acquired through quests')
event.create('diamond_coin').displayName('Diamond Coin').tooltip('Acquired through quests')
event.create('netherite_coin').displayName('Netherite Coin').tooltip('Acquired through quests')
event.create('monster_coin').displayName('Monster Coin')
event.create('nether_coin').displayName('Nether Coin').tooltip('Acquired through completing Nether chapter quests')

event.create('diamond_nugget').displayName('Diamond Nugget')
event.create('emerald_nugget').displayName('Emerald Nugget')


})
onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})