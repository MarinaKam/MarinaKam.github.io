"use strict";function checkAnswer(e){function t(e){var t=0;for(var r in e)t+=parseInt(e[r]);return t}function r(){return $("input:checkbox").prop("checked",!1),k.remove(),!1}var a=$(".testBlock"),n=$("input:checkbox"),s=[];for(var c in local)s.push(questions[c].correctAnswer);var i=[];n.each(function(){$(this).prop("checked")?i.push(+$(this).val()):i.push(0)});var o=i.slice(0,3),l=i.slice(3,6),p=i.slice(6,9),u=[],v=t(o),h=t(l),d=t(p),g=function(e){return u.push(e)};g(v),g(h),g(d);for(var m=[],f=0;f<s.length;++f)s[f]==u[f]?m[f]='<span style="color:#335673">Correct answer!</span>':m[f]='<span style="color:red">Incorrect answer!</span>';var k=$('<div class="modal"><h1>Result Test</h1></div>'),S=$(".wrap");S.append(k);for(var w=0;w<a.length;w++){var b=$('<div class="questDiv">'+(w+1)+"."+local[w].text+"</div>");k.append(b);var x=$('<div class="ansDiv">'+m[w]+"</div>");k.append(x)}var y=$('<a href="" id="reset">Exit</a>');k.append(y),y.on("click",r),e.preventDefault()}var html=$("#test").html(),questions=[{id:1,text:"What is HTML?",answers:["How To Make Landingpage","Hypertext Markup Language","Objective Programming Language"],correctAnswer:1},{id:2,text:"What is CSS?",answers:["Censor Sold Solar System","Central Sugar Station","Cascading Style Sheets"],correctAnswer:2},{id:3,text:"What is JavaScript?",answers:["Analog of Java with more functions","High-level interpreted programming language","Language of Javas in Star Wars"],correctAnswer:1}];localStorage.setItem("questions",JSON.stringify(questions));var local=localStorage.getItem("questions");local=JSON.parse(local);var content=tmpl(html,{local:questions});$("[type=submit]").before(content),$(".check").on("click",function(){$(this).parent().siblings().children().filter(":checked").removeAttr("checked")});var submit=$('input[type="submit"]');submit.on("click",checkAnswer);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjaGVja0Fuc3dlciIsImUiLCJnZXRTdW1SZXN1bHQiLCJhcnIiLCJzdW0iLCJpIiwicGFyc2VJbnQiLCJyZXNldFRlc3QiLCIkIiwicHJvcCIsIm1vZGFsIiwicmVtb3ZlIiwidGVzdEJsb2NrIiwiaW5wdXRzIiwicmlnaHRBbnN3ZXJzIiwibG9jYWwiLCJwdXNoIiwicXVlc3Rpb25zIiwiY29ycmVjdEFuc3dlciIsImNob2ljZSIsImVhY2giLCJ0aGlzIiwidmFsIiwiZmlyc3RBbnN3ZXIiLCJzbGljZSIsInNlY29uZEFuc3dlciIsInRoaXJkQW5zd2VyIiwiY2hvaWNlUmVzdWx0IiwiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsImdldENob2ljZVJlc3VsdCIsInEiLCJyZXN1bHQiLCJ6IiwibGVuZ3RoIiwid3JhcCIsImFwcGVuZCIsImoiLCJxdWVzdERpdiIsInRleHQiLCJhbnNEaXYiLCJyZXNldCIsIm9uIiwicHJldmVudERlZmF1bHQiLCJodG1sIiwiaWQiLCJhbnN3ZXJzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRJdGVtIiwicGFyc2UiLCJjb250ZW50IiwidG1wbCIsImJlZm9yZSIsInBhcmVudCIsInNpYmxpbmdzIiwiY2hpbGRyZW4iLCJmaWx0ZXIiLCJyZW1vdmVBdHRyIiwic3VibWl0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQTRCQSxTQUFTQSxhQUFZQyxHQW1CbkIsUUFBU0MsR0FBYUMsR0FDcEIsR0FBSUMsR0FBTSxDQUNWLEtBQUssR0FBSUMsS0FBS0YsR0FDWkMsR0FBWUUsU0FBU0gsRUFBSUUsR0FFM0IsT0FBT0QsR0E4QlQsUUFBU0csS0FHUCxNQUZBQyxHQUFFLGtCQUFrQkMsS0FBSyxXQUFXLEdBQ3BDQyxFQUFNQyxVQUNDLEVBeERULEdBQUlDLEdBQVlKLEVBQUUsY0FDZEssRUFBU0wsRUFBRSxrQkFDWE0sSUFDSixLQUFLLEdBQUlULEtBQUtVLE9BQ1pELEVBQWFFLEtBQUtDLFVBQVVaLEdBQUdhLGNBRWpDLElBQUlDLEtBQ0pOLEdBQU9PLEtBQUssV0FDTlosRUFBRWEsTUFBTVosS0FBSyxXQUNmVSxFQUFPSCxNQUFNUixFQUFFYSxNQUFNQyxPQUVyQkgsRUFBT0gsS0FBSyxJQUdoQixJQUFJTyxHQUFjSixFQUFPSyxNQUFNLEVBQUcsR0FDOUJDLEVBQWVOLEVBQU9LLE1BQU0sRUFBRyxHQUMvQkUsRUFBY1AsRUFBT0ssTUFBTSxFQUFHLEdBQzlCRyxLQVFBQyxFQUFRMUIsRUFBYXFCLEdBQ3JCTSxFQUFTM0IsRUFBYXVCLEdBQ3RCSyxFQUFRNUIsRUFBYXdCLEdBQ3JCSyxFQUFrQixTQUF5QkMsR0FDN0MsTUFBT0wsR0FBYVgsS0FBS2dCLEdBRTNCRCxHQUFnQkgsR0FDaEJHLEVBQWdCRixHQUNoQkUsRUFBZ0JELEVBRWhCLEtBQUssR0FEREcsTUFDS0MsRUFBSSxFQUFHQSxFQUFJcEIsRUFBYXFCLFNBQVVELEVBQ3JDcEIsRUFBYW9CLElBQU1QLEVBQWFPLEdBQ2xDRCxFQUFPQyxHQUFLLHFEQUVaRCxFQUFPQyxHQUFLLGtEQUdoQixJQUFJeEIsR0FBUUYsRUFBRSxpREFDVjRCLEVBQU81QixFQUFFLFFBQ2I0QixHQUFLQyxPQUFPM0IsRUFDWixLQUFLLEdBQUk0QixHQUFJLEVBQUdBLEVBQUkxQixFQUFVdUIsT0FBUUcsSUFBSyxDQUN6QyxHQUFJQyxHQUFXL0IsRUFBRSwwQkFBNEI4QixFQUFJLEdBQUssSUFBTXZCLE1BQU11QixHQUFHRSxLQUFPLFNBQzVFOUIsR0FBTTJCLE9BQU9FLEVBQ2IsSUFBSUUsR0FBU2pDLEVBQUUsdUJBQXlCeUIsRUFBT0ssR0FBSyxTQUNwRDVCLEdBQU0yQixPQUFPSSxHQUVmLEdBQUlDLEdBQVFsQyxFQUFFLGlDQUNkRSxHQUFNMkIsT0FBT0ssR0FNYkEsRUFBTUMsR0FBRyxRQUFTcEMsR0FDbEJOLEVBQUUyQyxpQkF2RkosR0FBSUMsTUFBT3JDLEVBQUUsU0FBU3FDLE9BQ2xCNUIsWUFDRjZCLEdBQU0sRUFDTk4sS0FBUSxnQkFDUk8sU0FBWSwwQkFBMkIsNEJBQTZCLGtDQUNwRTdCLGNBQWlCLElBRWpCNEIsR0FBTSxFQUNOTixLQUFRLGVBQ1JPLFNBQVksMkJBQTRCLHdCQUF5QiwwQkFDakU3QixjQUFpQixJQUVqQjRCLEdBQU0sRUFDTk4sS0FBUSxzQkFDUk8sU0FBWSxxQ0FBc0MsOENBQStDLGtDQUNqRzdCLGNBQWlCLEdBRW5COEIsY0FBYUMsUUFBUSxZQUFhQyxLQUFLQyxVQUFVbEMsV0FDakQsSUFBSUYsT0FBUWlDLGFBQWFJLFFBQVEsWUFDakNyQyxPQUFRbUMsS0FBS0csTUFBTXRDLE1BQ25CLElBQUl1QyxTQUFVQyxLQUFLVixNQUFPOUIsTUFBT0UsV0FDakNULEdBQUUsaUJBQWlCZ0QsT0FBT0YsU0FDMUI5QyxFQUFFLFVBQVVtQyxHQUFHLFFBQVMsV0FDdEJuQyxFQUFFYSxNQUFNb0MsU0FBU0MsV0FBV0MsV0FBV0MsT0FBTyxZQUFZQyxXQUFXLFlBRXZFLElBQUlDLFFBQVN0RCxFQUFFLHVCQUNmc0QsUUFBT25CLEdBQUcsUUFBUzNDIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIGh0bWwgPSAkKCcjdGVzdCcpLmh0bWwoKTtcbnZhciBxdWVzdGlvbnMgPSBbe1xuICAnaWQnOiAxLFxuICAndGV4dCc6ICdXaGF0IGlzIEhUTUw/JyxcbiAgJ2Fuc3dlcnMnOiBbJ0hvdyBUbyBNYWtlIExhbmRpbmdwYWdlJywgJ0h5cGVydGV4dCBNYXJrdXAgTGFuZ3VhZ2UnLCAnT2JqZWN0aXZlIFByb2dyYW1taW5nIExhbmd1YWdlJ10sXG4gICdjb3JyZWN0QW5zd2VyJzogMVxufSwge1xuICAnaWQnOiAyLFxuICAndGV4dCc6ICdXaGF0IGlzIENTUz8nLFxuICAnYW5zd2Vycyc6IFsnQ2Vuc29yIFNvbGQgU29sYXIgU3lzdGVtJywgJ0NlbnRyYWwgU3VnYXIgU3RhdGlvbicsICdDYXNjYWRpbmcgU3R5bGUgU2hlZXRzJ10sXG4gICdjb3JyZWN0QW5zd2VyJzogMlxufSwge1xuICAnaWQnOiAzLFxuICAndGV4dCc6ICdXaGF0IGlzIEphdmFTY3JpcHQ/JyxcbiAgJ2Fuc3dlcnMnOiBbJ0FuYWxvZyBvZiBKYXZhIHdpdGggbW9yZSBmdW5jdGlvbnMnLCAnSGlnaC1sZXZlbCBpbnRlcnByZXRlZCBwcm9ncmFtbWluZyBsYW5ndWFnZScsICdMYW5ndWFnZSBvZiBKYXZhcyBpbiBTdGFyIFdhcnMnXSxcbiAgJ2NvcnJlY3RBbnN3ZXInOiAxXG59XTtcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdxdWVzdGlvbnMnLCBKU09OLnN0cmluZ2lmeShxdWVzdGlvbnMpKTtcbnZhciBsb2NhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdxdWVzdGlvbnMnKTtcbmxvY2FsID0gSlNPTi5wYXJzZShsb2NhbCk7XG52YXIgY29udGVudCA9IHRtcGwoaHRtbCwge2xvY2FsOiBxdWVzdGlvbnN9KTtcbiQoJ1t0eXBlPXN1Ym1pdF0nKS5iZWZvcmUoY29udGVudCk7XG4kKCcuY2hlY2snKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkuZmlsdGVyKCc6Y2hlY2tlZCcpLnJlbW92ZUF0dHIoJ2NoZWNrZWQnKTtcbn0pO1xudmFyIHN1Ym1pdCA9ICQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKTtcbnN1Ym1pdC5vbignY2xpY2snLCBjaGVja0Fuc3dlcik7XG5mdW5jdGlvbiBjaGVja0Fuc3dlcihlKSB7XG4gIHZhciB0ZXN0QmxvY2sgPSAkKCcudGVzdEJsb2NrJyk7XG4gIHZhciBpbnB1dHMgPSAkKCdpbnB1dDpjaGVja2JveCcpO1xuICB2YXIgcmlnaHRBbnN3ZXJzID0gW107XG4gIGZvciAodmFyIGkgaW4gbG9jYWwpIHtcbiAgICByaWdodEFuc3dlcnMucHVzaChxdWVzdGlvbnNbaV0uY29ycmVjdEFuc3dlcik7XG4gIH1cbiAgdmFyIGNob2ljZSA9IFtdO1xuICBpbnB1dHMuZWFjaChmdW5jdGlvbigpIHtcbiAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgIGNob2ljZS5wdXNoKCskKHRoaXMpLnZhbCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hvaWNlLnB1c2goMCk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGZpcnN0QW5zd2VyID0gY2hvaWNlLnNsaWNlKDAsIDMpO1xuICB2YXIgc2Vjb25kQW5zd2VyID0gY2hvaWNlLnNsaWNlKDMsIDYpO1xuICB2YXIgdGhpcmRBbnN3ZXIgPSBjaG9pY2Uuc2xpY2UoNiwgOSk7XG4gIHZhciBjaG9pY2VSZXN1bHQgPSBbXTtcbiAgZnVuY3Rpb24gZ2V0U3VtUmVzdWx0KGFycikge1xuICAgIHZhciBzdW0gPSAwO1xuICAgIGZvciAodmFyIGkgaW4gYXJyKSB7XG4gICAgICBzdW0gPSBzdW0gKyBwYXJzZUludChhcnJbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gc3VtO1xuICB9XG4gIHZhciBmaXJzdCA9IGdldFN1bVJlc3VsdChmaXJzdEFuc3dlcik7XG4gIHZhciBzZWNvbmQgPSBnZXRTdW1SZXN1bHQoc2Vjb25kQW5zd2VyKTtcbiAgdmFyIHRoaXJkID0gZ2V0U3VtUmVzdWx0KHRoaXJkQW5zd2VyKTtcbiAgdmFyIGdldENob2ljZVJlc3VsdCA9IGZ1bmN0aW9uIGdldENob2ljZVJlc3VsdChxKSB7XG4gICAgcmV0dXJuIGNob2ljZVJlc3VsdC5wdXNoKHEpO1xuICB9O1xuICBnZXRDaG9pY2VSZXN1bHQoZmlyc3QpO1xuICBnZXRDaG9pY2VSZXN1bHQoc2Vjb25kKTtcbiAgZ2V0Q2hvaWNlUmVzdWx0KHRoaXJkKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciB6ID0gMDsgeiA8IHJpZ2h0QW5zd2Vycy5sZW5ndGg7ICsreikge1xuICAgIGlmIChyaWdodEFuc3dlcnNbel0gPT0gY2hvaWNlUmVzdWx0W3pdKSB7XG4gICAgICByZXN1bHRbel0gPSAnPHNwYW4gc3R5bGU9XCJjb2xvcjojMzM1NjczXCI+Q29ycmVjdCBhbnN3ZXIhPC9zcGFuPic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFt6XSA9ICc8c3BhbiBzdHlsZT1cImNvbG9yOnJlZFwiPkluY29ycmVjdCBhbnN3ZXIhPC9zcGFuPic7XG4gICAgfVxuICB9XG4gIHZhciBtb2RhbCA9ICQoJzxkaXYgY2xhc3M9XCJtb2RhbFwiPjxoMT5SZXN1bHQgVGVzdDwvaDE+PC9kaXY+Jyk7XG4gIHZhciB3cmFwID0gJCgnLndyYXAnKTtcbiAgd3JhcC5hcHBlbmQobW9kYWwpO1xuICBmb3IgKHZhciBqID0gMDsgaiA8IHRlc3RCbG9jay5sZW5ndGg7IGorKykge1xuICAgIHZhciBxdWVzdERpdiA9ICQoJzxkaXYgY2xhc3M9XCJxdWVzdERpdlwiPicgKyAoaiArIDEpICsgJy4nICsgbG9jYWxbal0udGV4dCArICc8L2Rpdj4nKTtcbiAgICBtb2RhbC5hcHBlbmQocXVlc3REaXYpO1xuICAgIHZhciBhbnNEaXYgPSAkKCc8ZGl2IGNsYXNzPVwiYW5zRGl2XCI+JyArIHJlc3VsdFtqXSArICc8L2Rpdj4nKTtcbiAgICBtb2RhbC5hcHBlbmQoYW5zRGl2KTtcbiAgfVxuICB2YXIgcmVzZXQgPSAkKCc8YSBocmVmPVwiXCIgaWQ9XCJyZXNldFwiPkV4aXQ8L2E+Jyk7XG4gIG1vZGFsLmFwcGVuZChyZXNldCk7XG4gIGZ1bmN0aW9uIHJlc2V0VGVzdCgpIHtcbiAgICAkKCdpbnB1dDpjaGVja2JveCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJlc2V0Lm9uKCdjbGljaycsIHJlc2V0VGVzdCk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==