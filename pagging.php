<?php if(isset($total_laman)) { ?>
  <?php if($total_laman > 1) { ?>
    <nav class="text-center">
      <ul class="pagination">
        <?php if($laman_sekarang > 1) {?>
          <li>
            <a href="index.php?laman=<?php echo $laman_sekarang - 1 ?>" aria-label="Sebelumnya">
              <span aria-hidden="true">Sebelumnya</span>
            </a>
          </li>
        <?php }else { ?>
          <li class="disabled">
            <span aria-hidden="true">Sebelumnya</span>
          </li>
        <?php } ?>
        <?php if($laman_sekarang < $total_laman) {?>
          <li>
            <a href="index.php?laman=<?php echo $laman_sekarang + 1 ?>" aria-label="Selanjutnya">
              <span aria-hidden="true">Selanjutnya</span>
            </a>
          </li>
        <?php }else {?>
          <li class="disabled">
            <span aria-hidden="true">Selanjutnya</span>
          </li>
        <?php } ?>
      </ul>
    </nav>
  <?php } ?>
<?php } ?>