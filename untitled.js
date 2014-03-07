function touchBUG() { // реагирует на нажатие кнопки по элементу //меню, отвечающего за общение с пользователем
		  if (userName)
		  {
          	msg = "сообщение" + userName;
			toolTip(msg);
		  }
		  else
		  {
		  	userName = prompt("введите ваше имя");
			var current_date = new Date;
    			var cookie_year = current_date.getFullYear ( ) + 1;
    			var cookie_month = current_date.getMonth ( );
    			var cookie_day = current_date.getDate ( );
    			set_cookie ( "bug_username", userName, cookie_year, cookie_month, cookie_day );
			if (userName)
			{
				msg = "сообщение";
				toolTip(msg);
			}
		  }
		  document.getElementById("bugImg").src = "bug_happy.gif";
		  setTimeout("document.getElementById('bugImg').src = 'bug.gif';",2000);
      }

function greetUser()//при загрузке страницы,реагирует на наличие имени
	  {
		if (userName) 
		{
			userName = get_cookie("bug_username");//ЭТА ЧАСТЬ //НЕ ВЫПОЛНЯЕТСЯ
			msg = "сообщение" + userName;
			toolTip(msg);
		}
		else 
		{
			msg = "сообщение";
		}
	  }

function get_cookie ( cookie_name )//получение значения куки
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
 
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}

function set_cookie ( name, value, exp_y, exp_m, exp_d, path, domain, secure ) //установка куки
{
  var cookie_string = name + "=" + escape ( value );
 
  if ( exp_y )
  {
    var expires = new Date ( exp_y, exp_m, exp_d );
    cookie_string += "; expires=" + expires.toGMTString();
  }
 
  if ( path )
        cookie_string += "; path=" + escape ( path );
 
  if ( domain )
        cookie_string += "; domain=" + escape ( domain );
  
  if ( secure )
        cookie_string += "; secure";
  
  document.cookie = cookie_string;
}
