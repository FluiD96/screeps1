require('init');
var harvester = require('harvester');
var builder = require('builder');
var harvester2 = require('harvester2');
var guard = require('guard');
var healer = require('healer');
var ranger = require('ranger');
var har = 0;
var ran = 0;
var gua = 0;
var bui = 0;
var hea = 0;
if(Memory.finished==1)
{
    Memory.finished=0;
    
Spawn.harvester = function(name) 
{
     Game.spawns.Spawn1.createCreep([CARRY,CARRY,WORK,MOVE,MOVE],'Harvester' + Game.spawns.Spawn1.room.find(FIND_MY_CREEPS).length+1, {role: 'harvester'})
};
Spawn.guard = function()
{
     Game.spawns.Spawn1.createCreep([ATTACK,ATTACK,TOUGH,TOUGH,MOVE],'Guard' + Game.spawns.Spawn1.room.find(FIND_MY_CREEPS).length+1, {role: 'guard'})
};
Spawn.ranger = function()
{
     Game.spawns.Spawn1.createCreep([RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,TOUGH,MOVE],'Ranger' + Game.spawns.Spawn1.room.find(FIND_MY_CREEPS).length+1, {role: 'ranger'})
};
    Spawn.healer = function(name) 
{
     Game.spawns.Spawn1.createCreep([HEAL,HEAL,HEAL,MOVE,MOVE],'Healer' + Game.spawns.Spawn1.room.find(FIND_MY_CREEPS).length+1, {role: 'healer'})
};
    Spawn.builder = function(name) 
{
     Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,CARRY,MOVE],'Builder' + Game.spawns.Spawn1.room.find(FIND_MY_CREEPS).length+1, {role: 'builder'})
};   
for(var name in Game.creeps) {
	var creep = Game.creeps[name];
	if (creep.memory.role == 'harvester')
	{
	har = har+1;
	if((creep.memory.sourceid==undefined)&&(Memory.sid0<3))
		    {
		        creep.memory.sourceid = 0;
		        Memory.sid0++;
		    };
    if((creep.memory.sourceid==undefined)&&(Memory.sid0>=3))
		    {
		        creep.memory.sourceid = 1;
		        Memory.sid1++;
		    };
	harvester(creep);
	};
    if (creep.memory.role == 'builder')
	{
	bui = bui+1;
	builder(creep);
	};
	if (creep.memory.role == 'guard')
	{
	gua = gua+1;
	guard(creep);
	};
	if (creep.memory.role == 'healer')
	{
	hea = hea+1;
	healer(creep);
	};
	if (creep.memory.role == 'ranger')
	{
	ran = ran+1;
	ranger(creep);
	};
};

    
	if(ran<0)
	{
	    Spawn.ranger()
	    
	};
	if(har<6)
	{
	    Spawn.harvester()
	    
	};
	if(gua<1)
	{
	    Spawn.guard()
	    
	};
	if(hea<0)
	{
	    Spawn.healer()
	    
	};
	if(bui<2)
	{
	    Spawn.builder();
	};

har = 0;
ran = 0;
gua = 0;
bui = 0;
hea = 0;

require('finisher');

};
