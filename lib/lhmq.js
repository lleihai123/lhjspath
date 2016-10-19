require('UITableViewCell')
require('UIColor')
defineClass("ViewController", {
            
            tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
            var i = "cell";
            var cell = tableView.dequeueReusableCellWithIdentifier(i);
            if (!cell) {
            cell = UITableViewCell.alloc().initWithStyle_reuseIdentifier(0, i);
            }
            //我在这里给cell的标题是"meiqing",通过JS修改成了"meijiaqing"
            cell.textLabel().setText("1111meiqing");
            //我在这里给cell的背景颜色是白色，但是上线后发现红色更好看，我就在JS里写了红色。
            cell.setBackgroundColor(UIColor.yellowColor());
            return cell;
            },
            
           }, {});
