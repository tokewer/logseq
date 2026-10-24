import os

# 1. Patch settings.cljs
settings_path = r'F:\新学习资料分站\软件\便签记录\logseq-web-clean\src\main\frontend\components\settings.cljs'
with open(settings_path, 'r', encoding='utf-8') as f:
    content = f.read()

target1 = '(str target-dir "\\\\" (or repo "default"))'
replacement1 = '(str target-dir "\\\\" (clojure.string.replace (str (or repo "高三")) #"^logseq_db_" ""))'
if target1 in content:
    content = content.replace(target1, replacement1)
    with open(settings_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Patched settings.cljs")
else:
    print("Target1 not found in settings.cljs")

# 2. Patch export.cljs
export_path = r'F:\新学习资料分站\软件\便签记录\logseq-web-clean\src\main\frontend\handler\export.cljs'
with open(export_path, 'r', encoding='utf-8') as f:
    exp_content = f.read()

target2 = '"X-Logseq-Repo" (js/encodeURIComponent (str repo))'
replacement2 = '"X-Logseq-Repo" (js/encodeURIComponent (clojure.string.replace (str (or repo "高三")) #"^logseq_db_" ""))'
if target2 in exp_content:
    exp_content = exp_content.replace(target2, replacement2)

target3 = '(let [repo-name (common-sqlite/sanitize-db-name repo)]'
replacement3 = '(let [repo-name (clojure.string.replace (common-sqlite/sanitize-db-name (or repo "高三")) #"^logseq_db_" "")]'
if target3 in exp_content:
    exp_content = exp_content.replace(target3, replacement3)

with open(export_path, 'w', encoding='utf-8') as f:
    f.write(exp_content)
print("Patched export.cljs")
