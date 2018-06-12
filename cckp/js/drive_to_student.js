var ul1=document.getElementsByClassName('ul1')[0];
var lis=ul1.getElementsByTagName('li');
var wrap=document.getElementsByClassName('wrap')[0];
var surface=wrap.getElementsByClassName('surface');
for(var i=0;i<lis.length;i++){
	lis[i].index=i;
	lis[i].onclick=function(){
		for(var i=0;i<lis.length;i++){
				lis[i].className='';
			}
			for(var i=0;i<surface.length;i++){
				surface[i].className='surface';
			}
			this.className='hover';
			surface[this.index].className='surface show';
	}
}


$('.no').click(function(){
			$('.reward').hide();
	});

$('.details').click(function(){
	index=$(this).index();
	$('.reward').eq(index).show();
	$('.yes').click(function(){
		index++;
		$('.reward').eq(index-1).hide();
		$('.reward').eq(index).show();
		
	});
});

$('.shopping').click(function(){
	index=$(this).index();
	$('.shop').eq(index).show();
	$('.yes').click(function(){
		index++;
		$('.shop').eq(index-1).hide();
		$('.shop').eq(index).show();
	})
})
