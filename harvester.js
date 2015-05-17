module.exports = function (creep) 
{
	if(creep.energy < creep.energyCapacity) 
	{
		var sources = creep.room.find(FIND_SOURCES);
		if(Memory.sid0<4)
		{
		        if(creep.memory.sourceid==0)
		        {
		            creep.moveTo(sources[creep.memory.sourceid]);
		            creep.harvest(sources[creep.memory.sourceid]);
		        };
	    };
	    if(Memory.sid1>0)
		{
		        if(creep.memory.sourceid==1)
		        {
		            creep.moveTo(sources[creep.memory.sourceid]);
		            creep.harvest(sources[creep.memory.sourceid]);
		        };
	    };
	};
	if(creep.energy >= creep.energyCapacity)
	{
	    
		creep.moveTo(Game.spawns.Spawn1);
		creep.transferEnergy(Game.spawns.Spawn1);
		if(Memory.sid0<4)
		{
		        if(creep.memory.sourceid==0)
		        {
		            Memory.sid0--;
		            creep.memory.sourceid=undefined;
		        };
	    };
	    return;
	};

};
