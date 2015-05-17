module.exports = function(creep) 
{
	var targets = creep.room.find(FIND_HOSTILE_CREEPS);
	if(targets.length) 
	{
	        creep.pos.findPathTo(targets[0]);
		    creep.moveTo(creep.pos.findPathTo(targets[0])[creep.pos.findPathTo(targets[0]).length-4]);
		    creep.rangedAttack(targets[0]);
    };
};
