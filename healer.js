module.exports = function (creep) {
for(var name in Game.creeps)
{
    var creep1 = Game.creeps[name];
if ((creep1.memory.role != 'healer') && (creep1.memory.role != 'builder') && (creep1.memory.role != 'harvester'))
	{
	    creep.moveTo(creep1);
	    if(creep1.hits < creep1.hitsMax)
	    {
	        creep.moveTo(creep1);
	        creep.heal(creep1);
	    };
	};
    
};
}
